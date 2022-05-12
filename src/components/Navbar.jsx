import React from "react";
import '../styles/Navbar.css'
import img from '../image/logo512.png'
const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={img} alt="" />
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre Mi</a></li>
                    <li><a href="">Portafolio Web</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>

        </nav>


    )
}
export default Navbar; 