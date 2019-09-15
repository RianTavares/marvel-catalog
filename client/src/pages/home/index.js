import React, {useState, useEffect} from "react";

const Home = () => {

    const [backMessage, setBackMessage] = useState([]);

    const callApi = async () => {
        const request = await fetch('api/v1/teste');
        const data = await request.json();
        console.log(data);
        setBackMessage(data);
        
    }

    useEffect(() => {
        callApi();
    })


    return(
        <>
            <h1>pagina principal</h1>
            <div>{backMessage}</div>
        </>
    );
}

export default Home;


// .map((texto) => {return(<>texto.texto</>)})