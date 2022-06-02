import React from "react";
import '../../styles/OnModal.css'
import Img1 from '../../image/petgram.png'
import { BsFillXCircleFill, BsGithub } from "react-icons/bs";

const FirtsImage = (props) => {
    const f = props.f
    const CloseModal = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (

        <div className="container-modal">
            <div className="container-img">
                <button
                    onClick={CloseModal}
                >
                    <img src={Img1} alt="" className="petimg" />
                </button>
            </div>
            <div className="container-words">
                <p>{f("modal.im1p1")}</p>
                <p>{f("modal.im1p2")}</p>
            </div>
            <div className="containers-buttons buttonspet">
                <a href="https://github.com/juancarlos301/petgram" target="_blank" rel="noreferrer">
                    <button>
                        <BsGithub />
                        <p>
                            {f("modal.git")}
                        </p>
                    </button>
                </a>

                <button
                    onClick={CloseModal}
                >
                    <BsFillXCircleFill />
                    <p>
                        {f("modal.close")}
                    </p>
                </button>

            </div>

        </div>
    )
}
export default FirtsImage;