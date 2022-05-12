import React from "react";
import '../styles/Footer.css'
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-part-1">
                <p>Find me here!</p>
                <p>Juancarlos.31.2002@gmail.com</p>
            </div>
            <div className="footer-part-2">
                <a href="https://www.facebook.com/juancarlos.valenciamontoya.3">
                    Juancarlos m'v <span className="pp">-</span>
                </a>
                <a href="https://github.com/juancarlos301">
                    Juancarlos301 <span className="pp">-</span>
                </a>
                <a href="https://www.linkedin.com/in/juan-carlos-valencia-montoya-b81848236/">
                    Juan Carlos Valencia
                    <span className="pp1">...</span></a>
            </div>
        </div>
    )
}
export default Footer; 