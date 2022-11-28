import React, {useState,useEffect} from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import TimePicker from "react-time-picker";
// import TimePicker from 'react-timepicker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker/dist/entry.nostyle';
// import TimePicker from 'react-timepicker';
// import 'react-timepicker/dist/react-timepicker.css';


// import TimePicker from "react-time-picker/dist/entry.nostyle";


// Status
// departureTime
// Arrival time
// Origin
// Des
// Created
// Update
// Flight id



const UpdateFlight = () =>{


    const [deptDate, setDeptDate] = useState(null);
    const [deptTime, setdeptTime] = useState(null);
    const [arrDate, setArrDate] = useState(null);
    const [arrTime, setArrTime] = useState(null);


    return(
        <div>
        <div class="Container">
                <div class="loginclass">
                    <div className="Auth-form-container">
                            <form className="Auth-form" >
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Update Flight Schedule</h3>

                                <div style={{marginTop:'25px'}}>
                                <label>Status</label>
                                <select class="form-select selectWidth" aria-label="Default select example" >
                                    <option selected>Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="2">inactive</option>
                                    <option value="3">arriving</option>
                                    <option value="4">arrived</option>
                                    <option value="5">departed</option>
                                    <option value="6">delayed</option>
                                    <option value="7">cancelled</option>
                                </select>
                                </div>



                                <div className="form-group mt-3">
                                    <label>Origin</label>
                                    <input type="text" className="form-control mt-1" placeholder="Enter Origin place" 
                                    // value={isUsername} onChange={usernameFun}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Destination</label>
                                    <input type="text" className="form-control mt-1" placeholder="Enter Destination place" 
                                    // value={isUsername} onChange={usernameFun}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                <label>Select Dept Date</label>
                                <DatePicker
                                        selected={deptDate}
                                        onChange={ date => setDeptDate(date) }
                                        name="startDate"
                                        dateFormat="yyyy/MM/dd"
                                        minDate={new Date()}
                                    />
                                </div>


                                <div className="form-group mt-3">
                                <label>Select Dept Time</label>
                                <TimePicker
                                        selected={deptTime}
                                        onChange={ time => setdeptTime(time) }
                                        name="startTime"
                                        // dateFormat="yyyy/MM/dd"
                                        // minDate={new ()}
                                    />
                                </div>


                                <div className="form-group mt-3">
                                <label>Select Arrival Date</label>
                                <DatePicker
                                        selected={arrDate}
                                        onChange={ date => setArrDate(date) }
                                        name="startDate"
                                        dateFormat="yyyy/MM/dd"
                                        minDate={new Date()}
                                    />
                                </div>


                                <div className="form-group mt-3">
                                    <label>Flight Id</label>
                                    <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter Flight Id"
                                    // value={isPassword} onChange={passFun}
                                    />
                                </div>

                                {/* <div style={{marginTop:'25px'}}>
                                <label>Status</label>
                                <select class="form-select selectWidth" aria-label="Default select example" >
                                    <option selected>Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="2">inactive</option>
                                    <option value="3">arriving</option>
                                    <option value="4">arrived</option>
                                    <option value="5">departed</option>
                                    <option value="6">delayed</option>
                                    <option value="7">cancelled</option>
                                </select>
                                </div> */}

                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary"  >
                                    Submit
                                    </button>
                                </div>
                                </div>
                                {/* { successfulLogin ? <div><h1>Hey Hi,👋 {isUsername}</h1></div>: null } */}
                                {/* <button type="submit" className="btn btn-primary" onClick={navigateToAirportEmp}>Airport Employee 👨‍🏭</button> */}
                                {/* <select class="form-select selectWidth" aria-label="Default select example" onChange={handleRole}>
                                    <option selected>Select Role 👨‍🏭</option>
                                    <option value="1">Airport Employee</option>
                                    <option value="2">Airline Employee</option>
                                    <option value="3">Three</option>
                                </select> */}

                            </form>
                            </div>
                </div>

        </div>
    </div>
    )
}

export default UpdateFlight;