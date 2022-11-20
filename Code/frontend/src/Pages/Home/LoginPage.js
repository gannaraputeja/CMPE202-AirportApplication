import React from 'react';
import './LoginPage.css';
import {useState,useEffect} from 'react';
import validator from 'validator'
import {Image} from 'react-bootstrap';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import backendUrl from './backendUrl.js';
import {useDispatch} from "react-redux";
function LoginPage (){

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isUsername,setIsUsername]=useState('');
    const [isPassword,setIsPassword]=useState('');
    const [successfulLogin,setSuccess] = useState('');
    const [validateEmail,setValidateEmail] = useState(false);
    const [role,setRole] = useState(null);
    const [empRole,setEmpRole] = useState('');

    useEffect(() => {
        console.log("PAGE LOADED");
        sessionStorage.clear();
      });

    const navigateToAirportEmp = () => {
        // 👇️ navigate to /AirportEmp
        navigate('/AirportEmp');
    };

    const usernameFun = event =>{
        setIsUsername(event.target.value);
    }
    const passFun = event =>{
        setIsPassword(event.target.value);
    }
    const handleRole= event =>{
        console.log("ROLE VAL:::",event.target.value);
        window.sessionStorage.setItem("Role",event.target.value);
        setRole(parseInt(event.target.value));
    }

    const validate = () => {
        if(!validator.isEmail(isUsername)){
            alert("Please enter valid email!")
        }
        // const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        // return expression.test(String(email).toLowerCase())
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
                setSuccess(true);
                console.log("successfulLogin");
                window.sessionStorage.setItem("LoggedIn", true);
                window.sessionStorage.setItem("UserName", isUsername);
                navigate('/SchedulePage');
            }
            else if(role===2){
                setSuccess(true);
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