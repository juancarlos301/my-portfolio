import React, { useEffect, useState } from "react";
import Mifoto from '../image/mifoto.jpg'
import '../styles/BttonCcv.css'
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
const ButtonCv = ({ f }) => {

    const [seeWidth, setSeeWidth] = useState(false)
    useEffect(() => {

        if (window.screen.width > 600) { setSeeWidth(true) }
        else { setSeeWidth(false) }
    }, [seeWidth])

    return (
        <div className="containerbuttonccv">
            <div className="containerNube">
                <h1>{f("skills.click")}</h1>
                {seeWidth ?
                    <BsFillArrowRightCircleFill size="40px" />
                    : <BsFillArrowDownCircleFill size="40px" />
                }
            </div>
            <a href="https://resume.creddle.io/resume/17lf56t28k4" target="_blank" rel="noreferrer">
                <button className="buttonimg">
                    <img src={Mifoto} alt="" />
                    <div className="after">
                        <h2>{f("skills.buttoncv")}</h2>
                    </div>
                </button>
            </a>

        </div>

    )
}

export default ButtonCv