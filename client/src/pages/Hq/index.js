import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Hq = () => {

    const [ backMsg, setBackMsg ] = useState([]);

    const comicDetailsApi = async () => {
        const request = await fetch('api/v1/details', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id})
        });
        const response = await request.json();
        setBackMsg(response[0]);
    }
    useEffect (() => {
        comicDetailsApi(); 
    }, [setBackMsg])
    
    let { id } = useParams();
    
    const imageHq = {
        backgroundImage: `url(${ backMsg.thumb })`
    }

    return(
        <>
            <section className="hq-details">
                <h1 className="hq-details__title">{ backMsg.title }</h1>

                <div className="hq-details__img" style={ imageHq }></div>
                
                <p className="hq-details__description">{backMsg.description}</p>
            </section>
        </>
    );
}
    
export default Hq;