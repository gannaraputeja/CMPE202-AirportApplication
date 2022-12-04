import backendurl from "./backendUrl";

const BaggageCarousel1 = () =>{

    const [data,setData] = useState();
    const [radio,setRadio] = useState();
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        // getGateMaintainData();
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
                                {role==='1'?
                                    <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                            {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const BaggageCarousel2 = () =>{

    const [data,setData] = useState();
    const [radio,setRadio] = useState();
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        // getGateMaintainData();
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
                                {role==='1'?
                                    <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                            {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const BaggageCarousel3 = () =>{

    const [data,setData] = useState();
    const [radio,setRadio] = useState();
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        // getGateMaintainData();
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
                                {role==='1'?
                                    <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                            {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const BaggageCarousel4 = () =>{

    const [data,setData] = useState();
    const [radio,setRadio] = useState();
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        // getGateMaintainData();
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
                                {role==='1'?
                                    <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                                }
                            </div>
                            {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                            {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const Gateway = () => {

    const [data,setData] = useState();
    const [radio,setRadio] = useState();
    const [role,setRole] = useState('');
    const [username,setUsername] = useState('');
    const [gatewayList,setGatewayList] = useState([]);

    useEffect(()=>{
        setRole(sessionStorage.getItem("Role"));
        setUsername(sessionStorage.getItem("UserName"));
        // getData();
        getGateMaintainData();
    },[]);

    const FunStatus = (e) =>{
        if(e==='active'){
            return 1;
        }
        else if(e==='inactive'){
            return 2;
        }
        else{
            return 0;
        }
    }

    const getGateMaintainData = () =>{
        Axios.get(`${backendurl}/airport/get/gates`,)
            .then((response)=>{
                console.log("RES:::",response.data);
                setGatewayList(response.data);
            })
            .catch(err =>{
                console.log(err.response);
            })
    }

    const updateGateStatus = (e) =>{
        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
            .then((response)=>{
                console.log("RES:::",response.data);
                setGatewayList(response.data);
                getGateMaintainData();
            })
            .catch(err =>{
                console.log(err.response);
            })

    }

    const fun = (event,a) =>{
        console.log("THIS IS FUNNN");
        console.log(event.target.checked);
        console.log(event.target.value);
        console.log(a.id);
        updateGateStatus(a.id);
        // console.log(var);
    }

    const fun2 = (name) =>{
        console.log("fun",name);

    }




    return(
        // <Navbar></Navbar>
        <div>
            <div class="Container">
                <div class="row navbar">
                    <div class="col-4">Airport</div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col">
                                {role==='1'?
                                    <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                                }
                            </div>
                            <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
            </div>

            <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                <table class="table table-hover table-dark">
                    <thead class="thead-dark">
                    <tr>
                        <th>Gate Name</th>
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        }

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        import backendurl from "./backendUrl";

                        const BaggageCarousel1 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }


                        const BaggageCarousel2 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel3 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }

                        const BaggageCarousel4 = () =>{

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        // getGateMaintainData();
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
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Gateway maintenance 🚪</button>:
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>
                    }
                        </div>
                    {role !=='1' || role !== '2'?<div class="col usernameclass">Hi Guest 👋</div>:<div class="col usernameclass">Hi {username} 👋</div>}
                    {/* <div class="col usernameclass">Hi {username} 👋</div> */}
                        </div>
                        </div>
                        </div>
                        </div>

                        </div>
                        )
                    }
                        const Gateway = () => {

                        const [data,setData] = useState();
                        const [radio,setRadio] = useState();
                        const [role,setRole] = useState('');
                        const [username,setUsername] = useState('');
                        const [gatewayList,setGatewayList] = useState([]);

                        useEffect(()=>{
                        setRole(sessionStorage.getItem("Role"));
                        setUsername(sessionStorage.getItem("UserName"));
                        // getData();
                        getGateMaintainData();
                    },[]);

                        const FunStatus = (e) =>{
                        if(e==='active'){
                        return 1;
                    }
                        else if(e==='inactive'){
                        return 2;
                    }
                        else{
                        return 0;
                    }
                    }

                        const getGateMaintainData = () =>{
                        Axios.get(`${backendurl}/airport/get/gates`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })
                    }

                        const updateGateStatus = (e) =>{
                        Axios.put(`${backendurl}/airport/update/gate/${e}`,)
                        .then((response)=>{
                        console.log("RES:::",response.data);
                        setGatewayList(response.data);
                        getGateMaintainData();
                    })
                        .catch(err =>{
                        console.log(err.response);
                    })

                    }

                        const fun = (event,a) =>{
                        console.log("THIS IS FUNNN");
                        console.log(event.target.checked);
                        console.log(event.target.value);
                        console.log(a.id);
                        updateGateStatus(a.id);
                        // console.log(var);
                    }

                        const fun2 = (name) =>{
                        console.log("fun",name);

                    }




                        return(
                        // <Navbar></Navbar>
                        <div>
                        <div class="Container">
                        <div class="row navbar">
                        <div class="col-4">Airport</div>
                        <div class="col-4"></div>
                        <div class="col-4">
                        <div class="row">
                        <div class="col">
                    {role==='1'?
                        <button type="submit" className="btn btn-primary" >Airline Employee ✈️👨‍✈️</button>:<div></div>
                    }
                        </div>
                        <div class="col usernameclass">Hi {username} 👋</div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div>
                    {/* {gatewayList && gatewayList.length > 0 && gatewayList.map((data)=>(
                        <div>
                            {data.terminal.name}
                            {data.id}
                            {data.name}
                            {data.status}
                        </div>
                    ))} */}
                        </div>

                        <div style={{width:'90vw',margin:'auto',marginTop:'10vh'}}>
                        <label style={{fontSize:'20px'}}>Gate Maintenance</label>
                        <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                        <th>Gate Name</th>

                        }
                        }

                        }

