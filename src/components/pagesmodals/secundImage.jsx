import React from "react";
import { useNavigate } from "react-router"
import ConImag from "../containerImag"
//css
import '../../styles/OnModal.css'
import Imageng1 from '../../image/imagen2.png'
import Imageng2 from '../../image/imagen3.png'


import { BsFillXCircleFill, BsGithub } from "react-icons/bs";

const SecundImage = (props) => {
    const f = props.f
    const navigate = useNavigate()

    const { par1, par2, par3 } = ""


    const CloseModalse = () => {
        props.setOpenProyect2(prevState => prevState - 1)
        navigate('/')
    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <ConImag
                    Imagen1={Imageng1}
                    Imagen2={Imageng2}
                    Imagen3={Imageng1}

                    par1={par1}
                    par2={par2}
                    par3={par3}
                    title="Graphics"
                />
            </div>
            <div className="container-allcontent">
                <div className="container-words">
                    <p>{f("modal.imp1")}</p>
                    <p>{f("modal.imp2")}</p>
                </div>
                <div className="containers-buttons">
                    <a href="/">
                        <button>
                            <BsGithub size="28px" />
                            {f("modal.git")}
                        </button>
                    </a>

                    <button
                        onClick={CloseModalse}
                    >
                        <BsFillXCircleFill size="28px" />
                        {f("modal.close")}
                    </button>

                </div>
            </div>
        </div>
    )
}
export default SecundImage;