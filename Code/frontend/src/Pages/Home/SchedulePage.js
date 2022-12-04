import React from "react";
import { useEffect, useState} from "react";
import './SchedulePage.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import backendurl from './backendUrl';

const SchedulePage = () => {
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [hours,setHours] = useState(1);
    const [airportSchedule,setAirportSchedule] = useState([]);

    useEffect(() => {
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        getAirportSchedule();
    }, []);

    const getAirportSchedule = () =>{
        Axios.get(`${backendurl}/airportschedule/${hours}`,)
        .then((response) => {
            console.log("AAAA:",response.data);
            setAirportSchedule(response.data);
        })
        .catch(err => {
            console.log(err.response);
        });
    }

    const postBaggage = () =>{
        Axios.post(`${backendurl}/airport/assign/baggage-carousel`)
        .then((response) =>{
            console.log("Success:",response);
            alert("Successfully Assigned Baggage 👍");
            getAirportSchedule();
        })
        .catch(err => {
            console.log(err.response);
        })
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
            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col">
                                {/* {role==='1'? 
                                    <button type="submit" className="btn btn-primary" onClick={navigateToGateway}>Gateway maintenance 🚪</button>:
                                    <div></div>
                                    // <button type="submit" className="btn btn-primary" onClick={navigateToGateway}>Airline Employee ✈️👨‍✈️</button>
                                } */}
                            </div>
                            {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                            {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'90vw', margin:'auto',marginTop:'10vh'}}>
                <div style={{float: 'right'}}>

                    {role ==='1'?
                    <div>
                    <button type="submit" style ={{margin:'10px'}}className="btn btn-primary" onClick={navigateToGateway}>Gateway maintenance 🚪</button>
                    <button class="btn btn-primary" style={{marginRight:'10px'}} onClick={postBaggage}>Baggage Carousel</button>

                    </div>:
                    <div></div>
                    }

                    {role === '2'? 
                    <button class="btn btn-primary" onClick={navigateupdateFlight}>Update Flight Schedule</button>:
                    <div></div>
                    }
            </div>

                <div>
                    {airportSchedule && airportSchedule.length > 0 && airportSchedule.map((data)=>(
                        <div>
                            {data.terminal.name}
                        </div>
                    ))}
                </div>



            <label style={{textAlign: 'center', fontSize:'20px',margin:'10px'}}>Flight Schedule</label>

            <div class="row" style={{backgroundColor:'black', color:'white',textAlign:'right',margin:'0px',padding:'20px'}}>
                    <div class="col-4"></div>
                    <div class="col-1"></div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col-7">Display Flight in</div>
                            <div class="col-3">
                                <select class="form-select" aria-label="Default select example" onChange={(e)=>{setHours(e)}}>
                                            <option selected value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                            </div>
                            <div class="col-2">
                                Hour
                                <button type="button" class="btn btn-primary bi-search" onClick={getAirportSchedule} ><i class="bi bi-search"></i>search</button>
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
                            <th>{data.flightInstance.departureTime}</th>
                            <th>{data.flightInstance.arrivalTime}</th>
                            <th>{data.flightInstance.origin}</th>
                            <th>{data.flightInstance.destination}</th>
                            {data.gate ===null?<th>notass</th>:<th>{data.gate.name}</th>}
                            {/* <th>{data.gate ==}</th> */}
                            <th>{data.terminal.name}</th>
                            {data.baggageCarousel ===null?<th>notass</th>:<th>{data.baggageCarousel.name}</th>}
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