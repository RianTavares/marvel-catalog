import React, {useState, useEffect} from "react";
import Search from "./../../components/Search";
import Item from "../../components/ItemHQ";

const Home = () => {
    
    const [ backMsg, setBackMsg ] = useState([]);
    
    const callApi = async () => {
        
        const request = await fetch('api/v1/comics');
        const data = await request.json();  
        setBackMsg(data);
        console.log(data);
    }
    
    useEffect (() => {
        callApi()
    }, [])
    
    return (
        <div>
            <Search />           
            <div className="hq-list">
                {backMsg.map((response) => {     
                    return(
                        <Item 
                            title={response.title}
                            thumb={response.thumb}
                            key={response.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}
        export default Home;
        