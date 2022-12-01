import React from 'react';
import './LoginPage.css';
import {useState,useEffect} from 'react';
import validator from 'validator'
import {Image} from 'react-bootstrap';
// import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import backendUrl from './backendUrl.js';
import {useDispatch} from "react-redux";
function LoginPage (){

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isUsername,setIsUsername]=useState('');
    const [isPassword,setIsPassword]=useState('');
    const [validateEmail,setValidateEmail] = useState(false);
    const [role,setRole] = useState(null);
    const [empRole,setEmpRole] = useState('');

    useEffect(() => {
        console.log("PAGE LOADED");
        sessionStorage.clear();
      });
    const handleRole= event =>{
        console.log("ROLE VAL:::",event.target.value);
        window.sessionStorage.setItem("Role",event.target.value);
        setRole(parseInt(event.target.value));
    }

    const validate = () => {
        if(!validator.isEmail(isUsername)){
            alert("Please enter valid email!")
        }
    }
    const checkLogin = () =>{
        console.log(isUsername,isPassword);
        validate();
        window.sessionStorage.setItem("Role",role);
        const payload = {
            email: isUsername,
            password: isPassword,
            role: role === 1 ? "airport" : role === 2 ? "airline" : "user"
        }

        Axios.post(`${backendUrl}/auth/login`, payload).then((res) => {
            console.log(res.data)
            window.sessionStorage.setItem("profile", JSON.stringify(res.data))
            dispatch({type: 'AUTH_SUCCESS', data: res.data})
            if(role===1){
                console.log("successfulLogin");
                window.sessionStorage.setItem("LoggedIn", true);
                window.sessionStorage.setItem("UserName", isUsername);
                navigate('/SchedulePage');
            }
            else if(role===2){
                console.log("successfulLogin");
                window.sessionStorage.setItem("LoggedIn", true);
                window.sessionStorage.setItem("UserName", isUsername);
                navigate('/UpdateFlight');
            }
        }).catch(error => {
            alert(error.response.data.message)
        })
    }



    return (
        <div class="bg">
            <div class="Container">
                    <div class="loginclass">
                        <div className="Auth-form-container">
                                <form className="Auth-form">
                                    <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Sign In</h3>
                                    <div className="form-group mt-3">
                                        <label>Email address</label>
                                        <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={isUsername}
                                    onChange={(e)=>setIsUsername(e.target.value)}
                                    />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                        value={isPassword}
                                        onChange={(e)=>setIsPassword(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop:'25px'}}>
                                    <label>Select Role</label>
                                    <select class="form-select selectWidth" aria-label="Default select example" onChange={handleRole}>
                                        <option selected>Select Role</option>
                                        <option value="1">Airport Employee</option>
                                        <option value="2">Airline Employee</option>
                                    </select>
                                    </div>

                                    <div className="d-grid gap-2 mt-3">
                                        <button type="button" className="btn btn-primary" onClick={checkLogin} >
                                        Submit
                                        </button>
                                    </div>

                                    </div>
                                </form>
                                </div>
                    </div>

            </div>
        </div>
    )

}

export default LoginPage;