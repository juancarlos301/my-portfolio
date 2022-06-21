import React from "react";

import '../styles/ConImag.css'
const ConImag = (props) => {

    return (
        <div class="container">
            <div class="box">
                <div class="imgBx">
                    <img src={props.Imagen1} alt="" />
                </div>
                <div class="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.par1}</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src={props.Imagen2} alt="" />

                </div>
                <div class="content">
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.par2}</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src={props.Imagen3} alt="" />

                </div>
                <div class="content">
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