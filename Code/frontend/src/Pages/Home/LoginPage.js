import React from 'react';
import './LoginPage.css';
import {useState,useEffect} from 'react';
import {Image} from 'react-bootstrap';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';


// import airplane3 from '../Images/airplane3.jpg';
// import a from '/Users/prudhvi/react/team_project/src/components/assets/b.jpg';

function LoginPage (){

    const navigate = useNavigate();
    const [isUsername,setIsUsername]=useState('');
    const [isPassword,setIsPassword]=useState('');
    const [successfulLogin,setSuccess] = useState('');
    const [role,setRole] = useState('');

    useEffect(() => {
        console.log("PAGE LOADED");
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
        setRole(event.target.value);

    }

    const checkLogin = () =>{
        console.log(isUsername,isPassword);
        window.sessionStorage.setItem("Role",role);
        if(isUsername ==='abc' && isPassword === '123' && role==='1'){
            setSuccess(true);
            console.log("successfulLogin");
            window.sessionStorage.setItem("LoggedIn", true);
            window.sessionStorage.setItem("UserName", isUsername);
            // navigateToAirportEmp();
            navigate('/SchedulePage');
        }
        else if(isUsername ==='abc' && isPassword === '123' && role==='2'){
            setSuccess(true);
            console.log("successfulLogin");
            window.sessionStorage.setItem("LoggedIn", true);
            window.sessionStorage.setItem("UserName", isUsername);
            // navigateToAirportEmp();
            navigate('/SchedulePage');
        }
        else{
            // setSuccess(false);
            console.log("Not successfulLogin");
        }
    }



    return (
        <div class="bg">
            <div class="Container">
                    <div class="loginclass">
                        <div className="Auth-form-container">
                                <form className="Auth-form" onSubmit={checkLogin}>
                                    <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Sign In</h3>
                                    <div className="form-group mt-3">
                                        <label>Email address</label>
                                        <input type="email" className="form-control mt-1" placeholder="Enter email" value={isUsername} onChange={usernameFun}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                        value={isPassword} onChange={passFun}
                                        />
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary" onClick={checkLogin} >
                                        Submit
                                        </button>
                                    </div>
                                    <p className="forgot-password text-right mt-2">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                    </div>
                                    { successfulLogin ? <div><h1>Hey Hi,👋 {isUsername}</h1></div>: null }
                                    <button type="submit" className="btn btn-primary" onClick={navigateToAirportEmp}>Airport Employee 👨‍🏭</button>
                                    <select class="form-select selectWidth" aria-label="Default select example" onChange={handleRole}>
                                        <option selected>Select Role 👨‍🏭</option>
                                        <option value="1">Airport Employee</option>
                                        <option value="2">Airline Employee</option>
                                        <option value="3">Three</option>
                                    </select>

                                </form>
                                </div>
                    </div>

            </div>
        </div>
    )

}

export default LoginPage;