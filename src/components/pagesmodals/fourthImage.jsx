import React from "react";
import { useNavigate } from "react-router"
import ConImag from "../containerImag"
//css
import '../../styles/OnModal.css'
import Imagene1 from '../../image/commerce.jpg'
import Imagene2 from '../../image/commerce2.jpg'
import Imagene3 from '../../image/commerce3.jpg'


import { BsFillXCircleFill, BsGithub } from "react-icons/bs";

const FourthImage = (props) => {
    const f = props.f
    const navigate = useNavigate()

    const par1 = f("modal.iCommerceChild1")
    const par2 = f("modal.iCommerceChild2")
    const par3 = f("modal.iCommerceChild3")


    const CloseModalse = () => {
        props.setOpenProyect2(prevState => prevState - 3)
        navigate('/')
    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <ConImag
                    Imagen1={Imagene1}
                    Imagen2={Imagene2}
                    Imagen3={Imagene3}

                    par1={par1}
                    par2={par2}
                    par3={par3}
                    title="Ecommerce"
                />
            </div>
            <div className="container-allcontent">
                <div className="container-words">
                    <p>{f("modal.icommercep1")}</p>
                    <p>{f("modal.icommercep2")}</p>
                </div>
                <div className="containers-buttons">
                    <a href="https://github.com/juancarlos301/codealo-commerce" target="_blank" rel="noreferrer">
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
export default FourthImage;