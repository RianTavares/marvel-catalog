import React from "react";

const Item = () => {
    return(
        <>  
            <section className="item">
                <h1 className="item__title">Title of HQ...</h1>
                <h2 className="item__author">author</h2>
                <button>Learn More</button>
                <div className="item__gradient"></div>
                <div className="item__image"></div>
            </section>
        </>
    );
}

export default Item;