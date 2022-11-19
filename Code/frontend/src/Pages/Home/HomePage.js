import React from "react";
import {useState,useEffect} from 'react';
import './HomePage.css';
import { Outlet, Link} from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomePage = () =>{

    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        // 👇️ navigate to /AirportEmp
        navigate('/LoginPage');
      };

    const navigateToUserreg = () => {
        navigate('/UserReg');
    }


    return (
        // <div>Homepage</div>
        <>
        <div class="bodyclass">
        <div class="title">
            <h2>Team Project</h2>
        </div>
                <div class="container">   
                            <div class="button">
                                <div class="row">
                                    <div class="buttonclass col text-center">
                                        <button type="button" class="btn btn-default" onClick={navigateToUserreg}>User</button>
                                    </div>
                                    <div class="buttonclass col text-center">
                                        <button type="button" class="btn btn-default" onClick={navigateToLoginPage} >Employee</button>
                                    </div>
                               
                                </div>
                            </div>
                                <div class="loginclass">
                                    <h2>login</h2>
                                </div>
                </div>
                {/* <button type="button" class="adminbtn btn btn-primary"></button> */}
    </div>

<Outlet />

</>
    )
}


export default HomePage;