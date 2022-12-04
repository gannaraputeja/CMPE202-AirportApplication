import React from "react";
import { useEffect, useState} from "react";
import './SchedulePage.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import backendurl from './backendUrl';
import Header from "../../Components/Header";
import Moment from "moment/moment";

const SchedulePage = () => {

    const Axios = axios.create({baseURL: `${backendurl}`})

    Moment.locale('en');

    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [hours,setHours] = useState('1');
    const [airportSchedule,setAirportSchedule] = useState([]);
    const [profile, setProfile] = useState({})

    useEffect(() => {
        setRole(sessionStorage.getItem("Role"));
        setUsername(JSON.parse(sessionStorage.getItem("profile"))?.user.firstname);
        setProfile(JSON.parse(sessionStorage.getItem("profile")))
        getAirportScheduleByHour();
    }, []);

    Axios.interceptors.request.use((req) => {
        if(sessionStorage.getItem('profile')) {
            req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('profile')).token}`
        }
        return req
    })

    const getAirportScheduleByHour = () =>{
        //console.log(hours)
        Axios.get(`/airport-schedules/${hours}`,)
        .then((response) => {
            console.log("AAAA:",response.data);
            setAirportSchedule(response.data);
        })
        .catch(err => {
            console.log(err.response);
        });
    }

    const postBaggage = () =>{
        Axios.post(`/airport/assign/baggage-carousel`)
        .then((response) =>{
            console.log("Success:",response);
            alert("Successfully Assigned Baggage 👍");
            getAirportScheduleByHour();
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    const logoutFun = () =>{
        sessionStorage.clear();
        navigate('/');
    }

    const navigateToGateway=()=>{
        navigate('/Gateway');
    }
    const navigateupdateFlight = () =>{
        navigate('/UpdateFlight');
    }
    const navigateBaggageCarousel = () =>{
        navigate('/BaggageCarousel');
    }

    const selectHour= event =>{
        console.log("Hour VAL:::",event.target.value);
        setHours(event.target.value);
        getFlights();
    }
    const getFlights = () =>{
        console.log("getttt flightssss");
    }
    

    return (
        <div>
            <Header />
            <div style={{width:'90vw', margin:'auto',marginTop:'10vh'}}>
                <div style={{float: 'right'}}>

                    {role ==='1'?
                    <div>
                    <button type="submit" style ={{marginRight:'10px'}}className="btn btn-primary" onClick={navigateToGateway}>Gateway maintenance 🚪</button>
                    <button class="btn btn-primary" style={{marginRight:'10px'}} onClick={postBaggage}>Assign Baggage Carousel</button>

                    </div>:
                    <div></div>
                    }

                    {role === '2'?
                    <button class="btn btn-primary" onClick={navigateupdateFlight}>Update Flight Schedule</button>:
                    <div></div>
                    }

            </div>

                {/*<div>
                    {airportSchedule && airportSchedule.length > 0 && airportSchedule.map((data)=>(
                        <div>
                            {data.terminal.name}
                        </div>
                    ))}
                </div>*/}



            <label style={{textAlign: 'center', fontSize:'20px',marginBottom:'10px'}}>Flight Schedule</label>

            <div class="row" style={{backgroundColor:'black', color:'white',textAlign:'right',margin:'0px',padding:'20px'}}>
                    <div class="col-4"></div>
                    <div class="col-1"></div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col-7">Display Flight in</div>
                            <div class="col-3">
                                <select class="form-select" aria-label="Default select example" onChange={(e)=>{setHours(e.target.value)}}>
                                            <option selected value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="4">4</option>
                                        </select>
                            </div>
                            <div class="col-2">
                                Hour
                                <button type="button" class="btn btn-primary bi-search" onClick={getAirportScheduleByHour} ><i class="bi bi-search"></i>search</button>
                                </div>
                        </div>
                    </div>
            </div>

            <table class="table table-hover table-dark">
                
                    <thead class="thead-dark">
                        <tr>
                            <th>Status</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Gate Name</th>
                            <th>Baggage Corousel Name</th>
                            <th>Terminal Name</th>
                        </tr>
                    </thead>
                        {airportSchedule && airportSchedule.length > 0 && airportSchedule.map((data)=>(
                    <tbody>
                        <tr>
                            <th>{data.flightInstance.status}</th>
                            <th>{Moment(data.flightInstance.departureTime).format('MM-DD HH:MM')}</th>
                            <th>{Moment(data.flightInstance.arrivalTime).format('MM-DD HH:MM')}</th>
                            <th>{data.flightInstance.origin}</th>
                            <th>{data.flightInstance.destination}</th>
                            {data.gate ===null?<th>NA</th>:<th>{data.gate.name}</th>}
                            {/* <th>{data.gate ==}</th> */}
                            <th>{data.terminal.name}</th>
                            {data.baggageCarousel ===null?<th>NA</th>:<th>{data.baggageCarousel.name}</th>}
                            {/* <th>{data.baggageCarousel.name}</th> */}
                        </tr>
                    </tbody>

                        ))}
                </table>
            </div>
        </div>
    )
}

export default SchedulePage;