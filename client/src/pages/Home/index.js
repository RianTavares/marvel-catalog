import React, {useState, useEffect} from "react";
import Item from "../../components/ItemHQ";

const Home = () => {
    
    const [backMsg, setBackMsg] = useState([]);
    const [search, setSearch] = useState('');
    const [test, setTest] = useState([]);
    
    const callApi = async () => {
        const request = await fetch('api/v1/comics');
        const data = await request.json();  
        setBackMsg(data);
        setTest(data);
        
        sessionStorage.setItem('hqs_items', JSON.stringify(data));
    }
    
    const updateSearch = (event) => {
        setSearch(event.target.value.substr(0, 20));

        setTest(backMsg.filter(
            (item) => {
                return item.title.toLowerCase().indexOf(search) !== -1;
            }
        ));

        console.log('search: ', search);
        console.log('data: ', test);
        
        
    }


    useEffect (() => {

        const sessionStorageVar = sessionStorage.getItem('hqs_items') ? sessionStorage.getItem('hqs_items') : null;

        if(sessionStorageVar == null) {
            callApi();
        } else {
            setBackMsg(JSON.parse(sessionStorageVar));
            setTest(JSON.parse(sessionStorageVar));
            
            
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

            <div className="hq-list">
                {test.map((response) => {     
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
        