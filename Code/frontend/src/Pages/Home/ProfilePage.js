import React from "react";
import { useEffect, useState} from "react";
import './SchedulePage.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import backendurl from './backendUrl';
import Header from "../../Components/Header";
import Moment from "moment/moment";


const ProfilePage = () =>{

    const [fname,setfname] = useState('');
    const [lname,setlname] = useState('');
    const [accstatus,setaccstatus] = useState('');
    const [email,setemail] = useState('');
    const [type,settype] = useState('');
    const [pno,setpno] = useState('');
    const history = useNavigate();


    useEffect(() => {
        var userObj = JSON.parse(sessionStorage.getItem("profile"));
        console.log(userObj.user);
        setfname(userObj.user.firstname);
        setlname(userObj.user.lastname);
        settype(userObj.user.type);
        setaccstatus(userObj.user.accountStatus);
        setemail(userObj.user.email);
        setpno(userObj.user.phone);
    },[fname,lname,accstatus]);
    const goBack = () =>{
        history(-1);
    }
    return (
    <div>
            <button type="button" style={{margin:'20px'}} class="btn btn-primary" onClick={() => goBack()}>Return</button>
            <div class="Container">
                    <div class="loginclass">
                        <div className="Auth-form-container">
                                <form className="Auth-form" style={{paddingTop:'0px'}}>
                                    <div className="Auth-form-content">
                                    <h3 className="Auth-form-title" style={{paddingTop:'5px'}}>Profile Card</h3>
                                    <div className="form-group mt-3">
                                        <label> First Name:</label>
                                        <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    defaultValue={fname}
                                    // value={fname}
                                    disabled={true}
                                    // onChange={(e)=>setIsUsername(e.target.value)}
                                    />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Last Name</label>
                                        <input
                                        type="text"
                                        className="form-control mt-1"
                                        value={lname}
                                        disabled={true}
                                        
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Account Status</label>
                                        <input
                                        type="text"
                                        className="form-control mt-1"
                                        value={accstatus}
                                        disabled={true}  
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Email</label>
                                        <input
                                        type="text"
                                        className="form-control mt-1"
                                        value={email}
                                        disabled={true}  
                                        />
                                    </div>


                                    <div className="form-group mt-3">
                                        <label>Employee Type</label>
                                        <input
                                        type="text"
                                        className="form-control mt-1"
                                        value={type}
                                        disabled={true}  
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Phone Number</label>
                                        <input
                                        type="text"
                                        className="form-control mt-1"
                                        value={pno}
                                        disabled={true}  
                                        />
                                    </div>



                                    {/* <div style={{marginTop:'25px'}}>
                                    <label>Select Role</label>
                                    <select class="form-select selectWidth" aria-label="Default select example" 
                                    >
                                        <option selected>Select Role 👨‍🏭</option>
                                        <option value="1">Airport Employee</option>
                                        <option value="2">Airline Employee</option>
                                    </select>
                                    </div> */}

                                    {/* <div className="d-grid gap-2 mt-3">
                                        <button type="button" className="btn btn-primary"  >
                                        Submit
                                        </button>
                                    </div> */}
                                    </div>

                                </form>
                                </div>
                    </div>

            </div>
        



    </div>
    )
};

export default ProfilePage;