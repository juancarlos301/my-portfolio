import React from "react";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import MyPersonal from "../components/MyPersonal";
//css
import '../styles/index.css'

const Header = () => {

    return (
        <div className="page">
            <div className="container-1">
                <Navbar />
                <h1>Hi!, I'm Juan Carlos V</h1>
                <h2>Frotend developer</h2>
            </div>
            <div className="container-2">
                <MyPersonal />
            </div>
            <div className="container-3">
                <Footer />
            </div>
        </div>
    )
}
export default Header;

