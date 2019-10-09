import React, {useState, useEffect} from "react";
import Search from "./../../components/Search";
import Item from "../../components/ItemHQ";

const Home = () => {

    const [backMsg, setBackMessage] = useState([]);

    const callApi = async () => {
        const request = await fetch('api/v1/teste');
        const data = await request.json();
        setBackMessage(data);
        console.log(data)
    }

    useEffect(()=>{
        callApi()
    }, [])

    return(
        <>
            <Search />           
            <h1>pagina principal</h1>
            <Item />
            <div>{backMsg.map((txt)=>{
                return(txt.thumb)
            })}</div>
        </>
    );
}

export default Home;