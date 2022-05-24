import React from "react";
import '../../styles/OnModal.css'
import Img2 from '../../image/imagen2.png'
import { BsFillXCircleFill, BsGithub, BsFillArrowUpSquareFill } from "react-icons/bs";

const SecundImage = (props) => {

    const f = props.f

    const CloseModalse = () => {
        props.setOpenModal(prevState => !prevState)
        props.setOpenProyect2(prevState => prevState - 1)

    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <button
                    onClick={CloseModalse}
                >
                    <img src={Img2} alt="" />
                </button>
            </div>
            <div className="container-words">
                <p>{f("modal.imp1")}</p>
                <p>{f("modal.imp2")}</p>
            </div>
            <div className="containers-buttons">
                <a href="/">
                    <button>
                        <BsFillArrowUpSquareFill />

                        {f("modal.go")}
                    </button>
                </a>
                <a href="/">
                    <button>
                        <BsGithub />
                        {f("modal.git")}
                    </button>
                </a>

                <button
                    onClick={CloseModalse}
                >
                    <BsFillXCircleFill />
                    {f("modal.close")}
                </button>

            </div>

        </div>
    )
}
export default SecundImage;