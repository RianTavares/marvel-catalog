import React, {useState, useEffect} from "react";
import Item from "../../components/ItemHQ";
import Loading from "../../components/Loading";

const Home = () => {
    
    const [backMsg, setBackMsg] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, seFfilteredData] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    const callApi = async () => {
        setLoading(true);
        const request = await fetch('api/v1/comics');
        const data = await request.json(); console.log(data)  
        setBackMsg(data);
        seFfilteredData(data);
        await setLoading(false);
        sessionStorage.setItem('hqs_items', JSON.stringify(data));
    }
    
    const updateSearch = (event) => {
        const str = event.target.value.substr(0, 20)
        
        setSearch(str)
        
        seFfilteredData(
            backMsg.filter(
                (item) => { 
                    return item.title.toLowerCase().includes(str);
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
        </div>
    </>
    )
}
        export default Home;
        