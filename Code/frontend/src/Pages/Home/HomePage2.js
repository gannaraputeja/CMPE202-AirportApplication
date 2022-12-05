import react,{useState} from 'React';
import { useEffect} from "react";
import axios from 'axios';
import backendurl from './backendUrl';
import { useNavigate } from "react-router-dom";

const HomePage2 = () =>{

    const [flightname,setflightname] = useState('');
    const [home,setHome] = useState();


    const bfun=()=>{
        var count;
        count=count+1
        setflightname(count);
    }
    return (
        <div>
            home
            <button onClick={bfun()}>button</button>
        </div>
    )
}

export default HomePage2;