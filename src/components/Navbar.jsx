import React, { useState } from "react";
import '../styles/Navbar.css'


const Navbar = (props) => {

    const f = props.t
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <nav className="navbar"
        >
            <div
                className={click ? "navbar-content open" : "navbar-content close"}
            >
                <ul>
                    <li><a href="#my">{f("navbar.about-me")}</a></li>
                    <li><a href="#skills">{f("navbar.skills")}</a></li>
                    <li><a href="#abajo">{f("navbar.portfolio")}</a></li>
                    <li><a href="#footer">{f("navbar.contact")}</a></li>
                </ul>
            </div>

            <div className="barras">
                <button onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>


        </nav>


    )
}
export default Navbar; 