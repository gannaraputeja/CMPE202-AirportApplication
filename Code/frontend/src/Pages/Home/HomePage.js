import React from "react";
import {useState,useEffect} from 'react';
import './HomePage.css';
import Axios from "axios";
import { Outlet, Link} from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from "../../Components/Header";

const HomePage = () =>{

    const [data, setdata] = useState('');
    const [flightList, setFlightList] = useState([]);

    useEffect(()=>{
        sessionStorage.clear();
        getData();
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
            <Header/>
        </div>
        <div class="title">
            {/*<h2>SJC Airport</h2>*/}
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
                                    <div class="buttonclass col text-center" onClick={navigateToSchedule} >
                                    <button type="button" class="btn btn-default">Flight Schedule</button>
                                    </div>
                               
                                </div>
                                <div>
                                    {data && data.length > 0 && data.map((data)=>(
                                        // <li>{data.name}</li>
                                        <button type="button" class="btn btn-default" onClick={navigateToSchedule} >{data.title}</button>


                                    ))}
                                </div>

                            </div>
                </div>
    </div>

<Outlet />

</>
    )
}


export default HomePage;