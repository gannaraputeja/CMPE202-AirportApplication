import React from 'react';
import './LoginPage.css';
import {useState,useEffect} from 'react';
import validator from 'validator'
import {Image} from 'react-bootstrap';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import backendurl from './backendUrl';


// import airplane3 from '../Images/airplane3.jpg';
// import a from '/Users/prudhvi/react/team_project/src/components/assets/b.jpg';

function LoginPage (){

    const API = Axios.create({baseURL: `${backendurl}`})

    const navigate = useNavigate();
    const [isUsername,setIsUsername]=useState('');
    const [isPassword,setIsPassword]=useState('');
    const [successfulLogin,setSuccess] = useState('');
    const [validateEmail,setValidateEmail] = useState(false);
    const [role,setRole] = useState('');
    const [empRole,setEmpRole] = useState('');

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

    const validate = () => {
        if(validator.isEmail(isUsername)){
            setValidateEmail(true);
        }
        else{
            setValidateEmail(false);
        }
        // const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        // return expression.test(String(email).toLowerCase())
    }
    const checkLogin = () =>{
        console.log(isUsername,isPassword);
        validate();
        console.log(role);
        window.sessionStorage.setItem("Role",role);
        postData();
    }

    const postData = async ()=>{

        const payload = {
            email: isUsername,
            password: isPassword
        }
        console.log("AAAA:",payload);

        Axios.post(`${backendurl}/auth/login`,payload)
        .then((response)=>{
            console.log("Yessss");
            console.log(response.data.token);
            console.log(response.data.user);

            window.sessionStorage.setItem("userdetails",JSON.stringify(response.data.user));
            setEmpRole(response.data.type);
            navigate('/SchedulePage');
        })
        .catch(err =>{
            console.log(err.response.data);
            alert(err.response.data.message);
        })


    }



    return (
        <div className="bg">
            <div className="Container">
                    <div className="loginclass">
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
                                    {/* <div style={{marginTop:'25px'}}>
                                    <label>Select Role</label>
                                    <select class="form-select selectWidth" aria-label="Default select example" onChange={(e)=>setRole(e.target.value)}>
                                        <option selected>Select Role 👨‍🏭</option>
                                        <option value="1">Airport Employee</option>
                                        <option value="2">Airline Employee</option>
                                    </select>
                                    </div> */}

                                    <div className="d-grid gap-2 mt-3">
                                        <button type="button" className="btn btn-primary" onClick={()=>checkLogin()}>  Submit </button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                    </div>

            </div>
        </div>
    )

}

// export {empRole};
export default LoginPage;