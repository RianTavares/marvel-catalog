import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const img = {
        backgroundImage: `url(${props.thumb})`
    }

    const comicUrl = `${props.id}`

    return(
        <>  
            <section className="item">
                <h1 className="item__title">{props.title}</h1>
                <Link to={comicUrl}><button>See More</button></Link>
                <div className="item__gradient"></div>
                <div className="item__image" style={img}></div>
            </section>
        </>
    );
}

export default Item;