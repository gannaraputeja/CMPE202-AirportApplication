import React from 'react';
import './Gateway.css';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';


const Gateway = () => {

    const [data,setData] = useState();
    const [radio,setRadio] = useState();

    useEffect(()=>{
        getData();
    }) 

    const getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {return response.json();})
        .then(data => {setData(data)});
    }

    const fun = (event) =>{
        console.log(event.target.value);
        console.log(event.target.checked);
    }




    return(
        // <Navbar></Navbar>
        <div>
            <div style={{width:'75vw',margin:'auto',marginTop:'20vh'}}>
                <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                <table class="table table-hover table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>Flight Name</th>
                            <th>Time</th>
                            <th>Terminal</th>
                            <th>Link</th>
                            <th>Status</th>
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
                        <th>
                            <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" onChange={fun} id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>

                        </th>
                        </tr>
                    </tbody>
                        ))}
                </table>
            </div>
        </div>
    )
}

export default Gateway;