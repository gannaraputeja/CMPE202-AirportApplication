import React, {useState,useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import backendurl from './backendUrl';
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";


const UpdateFlight2 = () =>{

    const Axios = axios.create({baseURL: `${backendurl}`})

    useEffect(() => {
        var obj = JSON.parse(sessionStorage.getItem("FlightDBId"));
        console.log("✌️",obj);
        setFlightDBId(sessionStorage.getItem("FlightDBId"));
        console.log(obj.flightInstance.origin);
        // for (var i = 0; i < sessionStorage.getItem("FlightDBId"))
        setOrigin(obj.flightInstance.origin);
        setDestination(obj.flightInstance.destination);
        setStatus(obj.flightInstance.status);
        setFlightInstanceId(obj.flightInstance.id);
        setFlightId(obj.flightInstance.flight.id);
        setFlightNumber((obj.flightInstance.flight.number))
        setDeptDate(obj.flightInstance.departureTime);
        setArrDate(obj.flightInstance.arrDate);
        // console.log("👎",obj.flightInstance.departureTime);
        // $("#datetimepicker-input").val("11-11-2022" + " 00:01:00");
        // converDeptDate1(obj.flightInstance.departureTime);

    },[]);



    const [deptDate, setDeptDate] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [status, setStatus] = useState('');
    const [flightInstanceId, setFlightInstanceId] = useState('');
    const [flightId, setFlightId] = useState('')
    const [flightNumber, setFlightNumber] = useState('')

    const [a,b] =useState('');
    const [c,d] =useState('');
    const navigate = useNavigate();
    const [FlightDBId,setFlightDBId] = useState('');
    const [updatedata, setUpdatedata] = useState([]);



    const converDeptDate = () =>{
        console.log("FUN 1:",a);
        var ss=JSON.stringify(a);
        ss=ss.toString();
        var date1 = ss.substring(1,11)+" "+a.toTimeString().split(" ")[0];
        setDeptDate(date1);
    }

    // const converDeptDate1 = (date) =>{
    //     console.log("🔥 1:",a);
    //     var ss=JSON.stringify(a);
    //     ss=ss.toString();
    //     var date1 = ss.substring(1,11)+" "+a.toTimeString().split(" ")[0];
    //     setDeptDate(date1);
    // }

    const converArrDate = () =>{
        var sss=JSON.stringify(c);
        sss=sss.toString();
        var date2 = sss.substring(1,11)+" "+c.toTimeString().split(" ")[0];
        setArrDate(date2);
    }

    const submitfun = () =>{

        console.log("clickedd submitfun");
        // console.log(origin,status,destination,deptDate,arrDate,flightId);
        converDeptDate();
        converArrDate();
        console.log("deptDate::",deptDate);
        console.log("arrDate::",arrDate);
        postData();
    }

    const postData = async () =>{

        const payload = {
            status: status,
            departureTime: deptDate,
            arrivalTime: arrDate,
            origin: origin,
            destination: destination,
            flightId: flightId
          }

          console.log("ID:",FlightDBId);
          console.log("payload❌", payload);

      try {
          console.log(sessionStorage.getItem("FlightDBId"))
          const response = await Axios.post(`/airline/update/flight-schedule/${flightInstanceId}`, payload)
          console.log("YYYYYYYYY");
          console.log(response);
          navigate('/UpdateFlight');
      } catch(err) {
            console.log("XXXXXXX");
            console.log(err);
     }

    }


    return (
        <div>
            <Header/>
                 <div>
        <div className="Container">
                <div className="loginclass">
                    <div className="Auth-form-container">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Update Flight Schedule</h3>
                                <div style={{marginTop:'25px'}}>
                                <div className="form-group mt-3">
                                    <label>Flight Number</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter Flight Number"
                                        defaultValue={flightNumber}
                                        disabled={true}
                                        onChange={(e)=>setFlightNumber(e.target.value)}
                                    />
                                </div>
                                <label>Status</label>
                                <select className="form-select selectWidth" defaultValue={status} aria-label="Default select example" onChange={(e)=>setStatus(e.target.value)}>
                                    <option selected>{status}</option>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                    <option value="arriving">arriving</option>
                                    <option value="arrived">arrived</option>
                                    <option value="departed">departed</option>
                                    <option value="delayed">delayed</option>
                                    <option value="cancelled">cancelled</option>
                                </select>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Origin</label>
                                    <input type="text" defaultValue={origin} className="form-control mt-1" placeholder="Enter Origin place" onChange={(e)=>setOrigin(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Destination</label>
                                    <input type="text" defaultValue={destination} className="form-control mt-1" placeholder="Enter Destination place" onChange={(e)=>setDestination(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                <label>Select Dept Date</label>
                                    <DateTimePicker 
                                    dateFormat="yyyy/MM/dd HH:mm:ss"
                                    onChange={date => b(date)}
                                    id="deptdattime"
                                    value={a} 
                                    // defaultValue={deptDate}
                                    defaultDate={deptDate}
                                    minDate={new Date()}                                
                                    />
                                </div>

                                <div className="form-group mt-3">
                                <label>Select Arrival Date</label>
                                    <DateTimePicker 
                                    dateFormat="yyyy/MM/dd HH:mm:ss"
                                    onChange={date => d(date)}
                                    value={c} 
                                    defaultValue={arrDate}
                                    minDate={new Date()}                                
                                    />
                                </div>

                                <div className="d-grid gap-2 mt-3">
                                    <button type="button" className="btn btn-primary" onClick={()=>submitfun()}>
                                    Submit
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                </div>

        </div>
    </div>
        </div>
    )
}

export default UpdateFlight2;