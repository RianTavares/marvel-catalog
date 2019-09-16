import React from "react";
import Logo from "../../assets/imgs/logo.png"

const Footer = () => {

    return(
        <>
            <footer className="footer">

                <div className="footer__img">
                    <img src={Logo} alt="img footer"></img>
                </div>
                
                <div className="footer__text">
                    <p>
                        Developed by Rian Tavares and MarcioSardou
                    </p>
                </div>
            </footer>

        </>
    );
}

export default Footer;


