import React from "react";
import '../../styles/OnModal.css'
import Img1 from '../../image/imagen3.png'
import { BsFillXCircleFill, BsGithub } from "react-icons/bs";

const ThirdImage = (props) => {

    const CloseModal = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <button
                    onClick={CloseModal}
                >
                    <img src={Img1} alt="" />
                </button>
            </div>
            <div className="container-words">
                <p>Este proyecto es personal, creado a partir de Css, Html, Sass y React. Consiste en maquetar
                    una tienda online de diferentes productos, con todas las interacciones que una tienda online tendría;
                    como agregar productos a un carrito de compras, ver más especificacion del producto, crear una cuenta,
                    iniciar sesión, etc.
                </p>
                <p>este es un proyecto que me emocionó bastante el hacerlo, fue todo un reto en su momento y disfruté
                    cada parte de su realización.
                </p>
            </div>
            <div className="containers-buttons">
                <a href="/">
                    <button>
                        <BsGithub />
                        Ir al Proyecto
                    </button>
                </a>
                <button
                    onClick={CloseModal}
                >
                    <BsFillXCircleFill />
                    volver
                </button>

            </div>

        </div>
    )
}
export default ThirdImage;