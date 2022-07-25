import React from "react";
import ConImag from "../containerImag"
import { BsFillXCircleFill, BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router"
//css
import '../../styles/OnModal.css'
import Imagenm1 from '../../image/movie1.jpg'
import Imagenm2 from '../../image/movie2.png'
import Imagenm3 from '../../image/movie3.png'
const ThirdImage = (props) => {
    const f = props.f
    const navigate = useNavigate()

    const CloseModalse = () => {
        props.setOpenProyect2(prevState => prevState - 2)
        navigate('/')
    }

    const par1 = f("modal.imoviechild1")
    const par2 = f("modal.imoviechild2")
    const par3 = f("modal.imoviechild3")

    return (
        <div className="container-modal">
            <div className="container-img">
                <ConImag
                    Imagen1={Imagenm1}
                    Imagen2={Imagenm2}
                    Imagen3={Imagenm3}
                    par1={par1}
                    par2={par2}
                    par3={par3}
                    title="MoviesFlix"
                />
            </div>
            <div className="container-allcontent">

                <div className="container-words">
                    <p>{f("modal.imoviep1")}</p>
                    <p>{f("modal.imoviep2")}</p>
                </div>
                <div className="containers-buttons">
                    <a href="https://github.com/juancarlos301/movies-app" target="_blank" rel="noreferrer">
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

export default ThirdImage;