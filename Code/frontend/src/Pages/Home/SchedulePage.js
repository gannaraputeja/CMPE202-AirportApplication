import React from "react";
import { useEffect, useState} from "react";
import './SchedulePage.css';
import { useNavigate } from "react-router-dom";


const SchedulePage = () => {
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"))
        // console.log("role:",role);
    }, []);

    const navigateToGateway=()=>{
        navigate('/Gateway');
    }
    

    return (
        <div>
            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4">2</div>
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
        </div>
    )
}

export default SchedulePage;