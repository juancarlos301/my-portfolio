import React from "react";

import '../styles/ConImag.css'
const ConImag = (props) => {

    return (
        <div className="container">
            <div className="box">
                <div className="imgBx">
                    <img src={props.Imagen1} alt="" />
                </div>
                <div className="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.par1}</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={props.Imagen2} alt="" />

                </div>
                <div className="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.par2}</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={props.Imagen3} alt="" />

                </div>
                <div className="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.par3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConImag; 