import React, {useState,useEffect} from 'react';
import defaultProfile from './assets/defaultProfile.jpg'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import TimePicker from "react-time-picker";
// import TimePicker from 'react-timepicker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
// import TimePicker from 'react-time-picker/dist/entry.nostyle';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import backendurl from './backendUrl';
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import {useSelector} from "react-redux";
import Moment from 'moment'
// import TimePicker from 'react-timepicker';
// import 'react-timepicker/dist/react-timepicker.css';


// import TimePicker from "react-time-picker/dist/entry.nostyle";




const UpdateFlight = () =>{

    const Axios = axios.create({baseURL: `${backendurl}`})

    Moment.locale('en');

    const [deptDate, setDeptDate] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [status, setStatus] = useState('');
    const [flightId, setFlightId] = useState('');
    const [a,b] =useState('');
    const [c,d] =useState('');
    const [updatedata, setUpdatedata] = useState([]);
    const history = useNavigate();




    const [role,setRole] = useState('');
    const [profile,setProfile] = useState({})
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [hours,setHours] = useState(1);
    const [airportSchedule,setAirportSchedule] = useState([]);

    const {user} = useSelector((state) => state.authReducer.authData)

    Axios.interceptors.request.use((req) => {
        if(sessionStorage.getItem('profile')) {
            req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('profile')).token}`
        }
        return req
    })

    useEffect(() => {
        setRole(sessionStorage.getItem("Role"));
        setProfile(JSON.parse(sessionStorage.getItem("profile")))
        console.log(profile)
        getAirportSchedule();
    }, []);


    const getAirportSchedule = () =>{
        Axios.get(`/airline/schedules/user/${user.id}`,)
        .then((response) => {
            console.log("AAAA:",response.data);
            setAirportSchedule(response.data);
        })
        .catch(err => {
            console.log(err.response);
        });
    }

    const postBaggage = () =>{
        Axios.post(`/airport/assign/baggageCarousel`)
        .then((response) =>{
            console.log("Success:",response);
            alert("Successfully Assigned Baggage 👍");
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    const goBack = () =>{
        history(-1);
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
    


    const submitfun = () =>{

        console.log("clickedd submitfun");
        console.log(origin,status,destination,deptDate,arrDate,flightId);
        converDeptDate();
        converArrDate();
        console.log("deptDate::",deptDate);
        console.log("arrDate::",arrDate);
        postData();
    }


    // status: req.body.status,
    // departureTime: req.body.departureTime,
    // arrivalTime: req.body.arrivalTime,
    // origin: req.body.origin,
    // destination: req.body.destination,
    // flightId: req.body.flightId


    const postData = () =>{
        const payload = {
            status: status,
            departureTime: deptDate,
            arrivalTime: arrDate,
            origin: origin,
            destination: destination,
            flightId: flightId
          }

          console.log("payload❌", payload);

        Axios.put(`/airline/updateFlightSchedule/${flightId}`, payload)
        .then((response) => {
            console.log("YYYYYYYYY");
            console.log(response);
        })
        .catch(err => {
            console.log("XXXXXXX");
            console.log(err);
        });

    }

    const logoutFun = () =>{
        sessionStorage.clear();
        navigate('/');
    }

    const getFlightId = (data) =>{
        console.log(data);
        window.sessionStorage.setItem("FlightDBId", JSON.stringify(data));
        console.log("ZZZZ:",sessionStorage.getItem("FlightDBId"));
        navigate('/UpdateFlight2');
    }

    const converDeptDate = () =>{
        console.log("FUN 1:",a);
        var ss=JSON.stringify(a);
        ss=ss.toString();
        var date1 = ss.substring(1,11)+" "+a.toTimeString().split(" ")[0];
        setDeptDate(date1);
    }

    const converArrDate = () =>{
        var sss=JSON.stringify(c);
        sss=sss.toString();
        var date2 = sss.substring(1,11)+" "+c.toTimeString().split(" ")[0];
        setArrDate(date2);
    }

    return(

    <div>
    <Header/>
    <button type="button" style={{margin:'20px'}} class="btn btn-primary" onClick={() => goBack()}>Return</button>

    <div style={{width:'90vw', margin:'auto',marginTop:'10vh'}}>
        <div style={{float: 'right'}}>

            {role ==='1' &&
                <button class="btn btn-primary" style={{marginRight:'10px'}} onClick={postBaggage}>Baggage Carousel</button>
            }

            {role === '' &&
                <button class="btn btn-primary" onClick={navigateupdateFlight}>Update Flight Schedule</button>
            }
    </div>

        {/*<div>
            {airportSchedule && airportSchedule.length > 0 && airportSchedule.map((data)=>(
                <div>
                    { data.terminal.name}
                </div>
            ))}
        </div>*/}



    <label style={{textAlign: 'center', fontSize:'20px',marginBottom:'10px'}}>Flight Schedules</label>

    {/* <div class="row" style={{backgroundColor:'black', color:'white',textAlign:'right',margin:'0px',padding:'20px'}}>
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
                        </div>
                </div>
            </div>
    </div> */}



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
                    <th>Update</th>
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
                    <th><button type="button" class="btn btn-primary" onClick={()=>{getFlightId(data)}}>Update</button></th>
                </tr>
            </tbody>

                ))}
        </table>
    </div>
</div>


    )
}

export default UpdateFlight;