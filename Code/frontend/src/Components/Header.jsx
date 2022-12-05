import defaultProfile from "../Pages/Home/assets/defaultProfile.jpg";
import React, {useEffect, useMemo, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './Header.css'
import {Dropdown} from "react-bootstrap";

const Header = () => {

    const [role,setRole] = useState(null);
    const [username,setUsername] = useState('');
    const [profile,setProfile] = useState({})
    const navigate = useNavigate();


    useEffect(() => {
        console.log(typeof parseInt(sessionStorage.getItem("Role"), 10))
        setRole(parseInt(sessionStorage.getItem("Role"), 10));
        setUsername(JSON.parse(sessionStorage.getItem("profile"))?.user.firstname);
        setProfile(JSON.parse(sessionStorage.getItem("profile")))
    }, []);

    const navigateToLoginPage = () => {
        console.log("login")
        navigate('/LoginPage')
    }

    const logout = () => {
        console.log("Logging out")
        sessionStorage.clear()
        navigate('/LoginPage')
    }

    const navigateToProfilePage = () =>{
        navigate('/ProfilePage');
    }

    return <div>
        <div className="Container">
            <div className="row navbar">
                <div className="col-4"><h3>Airport Application</h3></div>
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="row">
                        {role !== 1 && role !== 2 ?
                            <div className="col usernameclass loginbtn">
                                <button type="submit"  className="btn" onClick={navigateToLoginPage}>LOGIN</button>
                            </div>
                            :
                            <div className="col usernameclass">
                                <div>
                                    <Dropdown style={{padding:'5px'}}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                            Menu
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>Hi {username} <img src={defaultProfile} onClick={()=>{navigateToProfilePage()}} className="profilePic"/></Dropdown.Item>
                                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>

}


export default Header;