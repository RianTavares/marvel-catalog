import React from "react";

const Item = (props) => {
    const img = {
        backgroundImage: `url(${props.thumb})`
    }

    return(
        <>  
            <section className="item">
                <h1 className="item__title">{props.title}</h1>
                <button>Learn More</button>
                <div className="item__gradient"></div>
                <div className="item__image" style={img}></div>
            </section>
        </>
    );
}

export default Item;