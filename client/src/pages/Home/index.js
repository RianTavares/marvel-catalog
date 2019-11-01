import React, {useState, useEffect} from "react";
import Search from "./../../components/Search";
import Item from "../../components/ItemHQ";
import Loading from "../../components/Loading";

const Home = () => {
    
    const [ backMsg, setBackMsg ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    const callApi = async () => {
        setLoading(true);
        const request = await fetch('api/v1/comics');
        const data = await request.json();  
        setBackMsg(data);
        await setLoading(false);
        sessionStorage.setItem('hqs_items', JSON.stringify(data));
    }
    
    useEffect (() => {

        const sessionStorageVar = sessionStorage.getItem('hqs_items') ? sessionStorage.getItem('hqs_items') : null;

        if(sessionStorageVar == null) {
            console.log('hq ta vazia');
            
            callApi();
        } else {
            console.log('já tenho HQ po');
            setBackMsg(JSON.parse(sessionStorageVar));
            
        }



    }, [])

    return (
        <div>
            <Search />  
            {loading ? <Loading /> : ''}         
            <div className="hq-list">
                {backMsg.map((response) => {     
                    return(
                        <Item 
                            title={response.title}
                            thumb={response.thumb}
                            id={response.id}
                            key={response.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}
        export default Home;
        