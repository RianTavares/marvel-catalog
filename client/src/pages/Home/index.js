import React, {useState, useEffect} from "react";
import Item from "../../components/ItemHQ";
import Loading from "../../components/Loading";

const Home = () => {
    
    const [backMsg, setBackMsg] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, seFfilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [requestLimit, setRequestLimit] = useState(12);
    

    const callApi = async () => {
        const buttonMore = document.getElementById("teste");
        buttonMore.classList.add('lds-ring');
        setLoading(true);
        setRequestLimit(requestLimit+12)
        
        const request = await fetch('api/v1/comics', {
            method: 'POST',
            body: JSON.stringify({limit: requestLimit}),
            headers: {
                'Content-Type': 'application/json'
              }
          });

        const data = await request.json(); console.log(data)  
        setBackMsg(data);
        seFfilteredData(data);
        buttonMore.classList.remove('lds-ring');
        await setLoading(false);
        sessionStorage.setItem('hqs_items', JSON.stringify(data));
    }
    
    const updateSearch = (event) => {
        const str = event.target.value.substr(0, 20).toLowerCase()
        
        setSearch(str)
        
        seFfilteredData(
            backMsg.filter(
                (item) => { 
                    return item.name.toLowerCase().includes(str);
                }
            ) 
        )

    }

    useEffect (() => {

        const sessionStorageVar = sessionStorage.getItem('hqs_items') ? sessionStorage.getItem('hqs_items') : null;

        if(sessionStorageVar == null) {
            callApi();
        } else {
            setBackMsg(JSON.parse(sessionStorageVar));
            seFfilteredData(JSON.parse(sessionStorageVar));
            
            
        }

    }, [])

    return (
        <>
        <div>
            <input type="search" 
                className="inp"
                onChange={updateSearch} 
                value={search}
            />

            {loading ? <Loading /> : ''}         
      
            <div className="hq-list">
                {filteredData.map((response) => {     
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
            
            <button id="teste" className="more" onClick={callApi}>More<div></div><div></div><div></div><div></div></button>

        </div>
    </>
    )
}

export default Home;
        