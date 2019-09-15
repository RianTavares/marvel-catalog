import React from "react";
import Logo from "../../assets/imgs/logo.png"

const Header = () => {

    return(
        <>
           <section className="header">
               <div className="header__logo">
                   <img src={Logo} alt="Marvel Catalog" />
                </div>
           </section>
        </>
    );
}

export default Header;


