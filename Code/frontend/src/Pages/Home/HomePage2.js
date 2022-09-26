import react,{useState} from 'React';

const HomePage2 = () =>{

    const [flightname,setflightname] = useState('');


    const bfun=()=>{
        console.log("heyyy");
        setflightname();
    }
    return (
        <div>
            home
            <button onClick={bfun()}>button</button>
        </div>
    )
}

export default HomePage2;