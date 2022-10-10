import react from 'React';
import { useNavigate } from "react-router-dom";

const SchedPage = () =>{
    const nav = useNavigate();
    const fun=()=>{
        nav('/HomePage2');
    }
    return (
        <div>
            Schedule page for
            <button className="btn btn-primary" onClick={()=>{fun()}}>Home page</button>
        </div>
    )
}

export default SchedPage;