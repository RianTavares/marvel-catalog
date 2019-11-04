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
                        Developed by 
                        <a href="https://riantavares.github.io/" target="_blank" rel="noopener noreferrer"> Rian Tavares </a> 
                        and 
                        <a href="https://www.linkedin.com/in/marcio-sardou-262b84149/" target="_blank" rel="noopener noreferrer"> Marcio Sardou </a>
                    </p>
                </div>
            </footer>

        </>
    );
}

export default Footer;


