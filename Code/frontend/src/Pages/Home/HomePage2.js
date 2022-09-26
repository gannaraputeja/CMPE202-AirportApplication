import react from 'React';

const HomePage2 = () =>{

    const bfun=()=>{
        console.log("heyyy");
    }
    return (
        <div>
            home
            <button onClick={bfun()}>button</button>
        </div>
    )
}

export default HomePage2;