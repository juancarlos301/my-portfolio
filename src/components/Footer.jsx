import React from "react";
import '../styles/Footer.css'
import { BsLinkedin, BsGithub, BsFacebook, BsFillEnvelopeFill } from 'react-icons/bs'
const Footer = (props) => {

    const f = props.f

    return (
        <div className="footer">
            <div className="footer-part-1">
                <p>{f("footer.contact")}</p>
                <p>
                    <BsFillEnvelopeFill />
                    Juancarlos.31.2002@gmail.com</p>
            </div>
            <div className="footer-part-2">
                <h3>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/juancarlos.valenciamontoya.3" target="_blank" >
                        <BsFacebook />
                        Juancarlos m'v -
                    </a>
                    <a rel="noopener noreferrer" href="https://github.com/juancarlos301" target="_blank">
                        <BsGithub />
                        Juancarlos301 -
                    </a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-carlos-valencia-montoya-b81848236/" target="_blank">
                        <BsLinkedin />
                        Juan Carlos V...
                    </a>
                </h3>
            </div>
        </div>
    )
}
export default Footer; 