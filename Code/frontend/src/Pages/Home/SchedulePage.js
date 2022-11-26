import React from "react";
import { useEffect, useState} from "react";
import './SchedulePage.css';
import { useNavigate } from "react-router-dom";


const SchedulePage = () => {
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [hours,setHours] = useState('');

    useEffect(() => {
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        getData();
        console.log(window.location.pathname);
        // console.log("role:",role);
    }, []);

    const getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {return response.json();})
        .then(data => {setData(data);})

    }

    const navigateToGateway=()=>{
        navigate('/Gateway');
    }
    const selectHour= event =>{
        console.log("Hour VAL:::",event.target.value);
        // window.sessionStorage.setItem("Role",event.target.value);
        setHours(event.target.value);
        getFlights();
    }
    const getFlights = () =>{
        console.log("getttt flightssss");
    }
    

    return (
        <div>
            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col">
                                {role==='1'? 
                                    <button type="submit" className="btn btn-primary" onClick={navigateToGateway}>Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" onClick={navigateToGateway}>Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'70vw', margin:'auto',marginTop:'10vh'}}>
            <label style={{textAlign: 'center', fontSize:'20px',margin:'10px'}}>Flight Schedule</label>

            <div class="row" style={{backgroundColor:'black', color:'white',textAlign:'right',margin:'0px'}}>
                    <div class="col-4"></div>
                    <div class="col-1"></div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col-7">Display Flight in</div>
                            <div class="col-3">
                                <select class="form-select" aria-label="Default select example" onChange={selectHour}>
                                            <option selected> </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                            </div>
                            <div class="col-2">
                                Hour
                                </div>
                        </div>
                    </div>
            </div>



            <table class="table table-hover table-dark">
                
                    <thead class="thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>Flight Name</th>
                            <th>Time</th>
                            <th>Terminal</th>
                            <th>Link</th>
                        </tr>

                    </thead>
                    {/* <tbody> */}
                        {data && data.length>0 && data.map((dataa)=>(
                    <tbody>
                        <tr>
                        <th>{dataa.UserId}</th>
                        <th>{dataa.id}</th>
                        <th>{dataa.title}</th>
                        <th>{dataa.body}</th>
                        <th>{dataa.body}</th>
                        {/* <th><button class="btn btn-primary">btn</button></th> */}
                        </tr>
                    </tbody>

                        ))}
                </table>
            </div>
        </div>
    )
}

export default SchedulePage;