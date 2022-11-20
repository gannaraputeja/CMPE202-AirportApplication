import React from "react";
import {useState,useEffect} from 'react';
import './HomePage.css';
import { Outlet, Link} from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomePage = () =>{

    useEffect(()=>{
        sessionStorage.clear();
    })

    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        // 👇️ navigate to /AirportEmp
        navigate('/LoginPage');
      };

      const navigateToSchedule = () =>{
        navigate('/SchedulePage');
    }

    const navigateToUserreg = () => {
        navigate('/UserReg');
    }


    return (
        // <div>Homepage</div>
        <>
        <div class="bodyclass">
        <div>
            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4">2</div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col ml-auto">
                                <button type="submit" className="btn btn-primary" onClick={navigateToLoginPage}>Login 🚪</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="title">
            <h2>Team Project</h2>
        </div>
                <div class="container">   
                            <div class="button">
                                {/* <div class="row">
                                    <div class="buttonclass col text-center">
                                        <button type="button" class="btn btn-default" onClick={navigateToUserreg}>User</button>
                                    </div>
                                    <div class="buttonclass col text-center">
                                        <button type="button" class="btn btn-default" onClick={navigateToLoginPage} >Employee</button>
                                    </div>
                               
                                </div> */}

                                <div class="row">
                                    <div class="buttonclass col text-center">
                                    <button type="button" class="btn btn-default" onClick={navigateToSchedule} >Flight Schedule</button>
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