import React from "react";
import { BsFillXCircleFill, BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router"
import ConImag from "../containerImag";
//css
import '../../styles/OnModal.css'
import Imagenp1 from '../../image/petgram2.png'
import Imagenp2 from '../../image/petgram1.png'
import Imagenp3 from '../../image/petgram3.png'

const FirtsImage = (props) => {

    const f = props.f
    const navigate = useNavigate()

    const par1 = f("modal.ipetchild1")
    const par2 = f("modal.ipetchild2")
    const par3 = f("modal.ipetchild3")
    const CloseModal = () => {
        navigate('/')
    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <ConImag
                    Imagen1={Imagenp1}
                    Imagen2={Imagenp2}
                    Imagen3={Imagenp3}
                    par1={par1}
                    par2={par2}
                    par3={par3}
                    title="Petgram"
                />
            </div>
            <div className="container-allcontent">

                <div className="container-words">
                    <p>{f("modal.im1p1")}</p>
                    <p>{f("modal.im1p2")}</p>
                </div>
                <div className="containers-buttons">
                    <a href="https://github.com/juancarlos301/petgram" target="_blank" rel="noreferrer">
                        <button>
                            <BsGithub size="28px" />
                            <p>
                                {f("modal.git")}
                            </p>
                        </button>
                    </a>

                    <button
                        onClick={CloseModal}
                    >
                        <BsFillXCircleFill size="28px" />
                        <p>
                            {f("modal.close")}
                        </p>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default FirtsImage;