import React from 'react';
import { useState,useEffect } from 'react';


const BaggageCarousel = () =>{

    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');

    useEffect(()=>{
        setRole(parseInt(sessionStorage.getItem("Role"), 10));
        setUsername(sessionStorage.getItem("UserName"));
    },[]); 


    return(
        <div>BaggageCarousel

<div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col">
                                {role===1?
                                    <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            {role !==1 || role !== 2?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BaggageCarousel;
