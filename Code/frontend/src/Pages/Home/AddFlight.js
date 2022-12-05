import React,{useState,useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import backendurl from './backendUrl';
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";

const AddFlight = () =>{

    const Axios = axios.create({baseURL: `${backendurl}`})

    const history = useNavigate();
    const [deptDate, setDeptDate] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [status, setStatus] = useState('');
    const [flightInstanceId, setFlightInstanceId] = useState('');
    const [flightId, setFlightId] = useState('')
    const [flightNumber, setFlightNumber] = useState('');
    const [a,b] =useState('');
    const [c,d] =useState('');
    const navigate = useNavigate();

    const submitfun = () =>{

        converDeptDate();
        converArrDate();
        postData();
    }

    const converArrDate = () =>{
        var sss=JSON.stringify(c);
        sss=sss.toString();
        var date2 = sss.substring(1,11)+" "+c.toTimeString().split(" ")[0];
        setArrDate(date2);
    }

        const converDeptDate = (date) =>{
        var ss=JSON.stringify(a);
        ss=ss.toString();
        var date1 = ss.substring(1,11)+" "+a.toTimeString().split(" ")[0];
        setDeptDate(date1);
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


        //   {
        //     "status": "arriving",
        //     "departureTime": "2022-12-09 00:00:00",
        //     "arrivalTime": "2022-12-15 00:00:00",
        //     "origin": "SJC",
        //     "destination": "SFO",
        //     "flightId": 1,
        //     "terminalId": 1
        // }

      try {
          const response = await Axios.post(`/airline/add/flight-schedule`, payload)
          navigate('/UpdateFlight');
      } catch(err) {
            console.log(err);
     }

    }


    const goBack = () =>{
        history(-1);
    }


    return (
        <div>
            <div>
            <Header/>
            <button type="button" style={{margin:'20px'}} class="btn btn-primary" onClick={() => goBack()}>Return</button>

                 <div>
        <div className="Container">
                <div className="loginclass">
                    <div className="Auth-form-container">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Add Flight Schedule</h3>
                                <div style={{marginTop:'25px'}}>
                                <div className="form-group mt-3">
                                    <label>Flight Number</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Enter Flight Number"
                                        // defaultValue={flightNumber}
                                        // disabled={true}
                                        onChange={(e)=>setFlightNumber(e.target.value)}
                                    />
                                </div>
                                <label>Status</label>
                                <select className="form-select selectWidth"  aria-label="Default select example"
                                 onChange={(e)=>setStatus(e.target.value)}
                                >
                                    {/* <option selected>{status}</option> */}
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
                                    <label>Terminal Name</label>
                                    {/* <input type="text" defaultValue={origin} className="form-control mt-1" placeholder="Enter Origin place" /> */}
                                    <select className="form-select selectWidth"  aria-label="Default select example"
                                 onChange={(e)=>setStatus(e.target.value)}
                                >
                                    <option selected>Terminal Number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                </div>


                                <div className="form-group mt-3">
                                    <label>Origin</label>
                                    <input type="text"  className="form-control mt-1" placeholder="Enter Origin place" onChange={(e) =>setOrigin(e.target.value)} 
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Destination</label>
                                    <input type="text" className="form-control mt-1" placeholder="Enter Destination place" onChange={(e) =>setDestination(e.target.value)} 
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
                                    // defaultValue={arrDate}
                                    minDate={new Date()}                                
                                    />
                                </div>

                                <div className="d-grid gap-2 mt-3">
                                    <button type="button" className="btn btn-primary" 
                                    onClick={()=>submitfun()}
                                    >
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
        </div>
    )
}


export default AddFlight;