import React from 'react';
import { useState,useEffect } from 'react';


const Login = () =>{


    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        // getGateMaintainData();
    },[]);
    const [data,setData] = useState();
    const [radio,setRadio] = useState();

    const usernameFun = event =>{
        setIsUsername(event.target.value);
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
        else {
            setValidateEmail(false);
        }
        label {
            font-size: 14px;
            font-weight: 600;
            color: rgb(34, 34, 34);
        }
    .selectWidth{
            margin: auto;
        }
    return(
        <div>BaggageCarousel

            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="row">

                </div>
            </div>

        </div>
    )
}

export default Login;
