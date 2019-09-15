import React, {useState, useEffect} from "react";

const Home = () => {

    const [backMsg, setBackMessage] = useState([]);

    const callApi = async () => {
        const request = await fetch('api/v1/teste');
        const data = await request.json();
        setBackMessage([data]);
        console.log(data)
    }

    useEffect(()=>{
        callApi()
    }, [])

    return(
        <>
            <h1>pagina principal</h1>
            <div>{backMsg.map((txt)=>{
                return(txt.texto)
            })}</div>
        </>
    );
}

export default Home;