import React, { useRef } from "react";
import '../styles/Carousel.css'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//imagenes
import Img1 from '../image/petgram.png'
import Img2 from '../image/imagen2.png'
//import Img3 from '../image/imagen3.png'

const Carousel = (props) => {

    const f = props.f

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)

    }
    const onClickButton2 = () => {
        props.setOpenModal(prevState => !prevState)
        props.setOpenProyect2(prevState => prevState + 1)
    }

    const slideShow = useRef(null)

    const Next = () => {
        if (slideShow.current.children.length > 0) {
            const firtsElement = slideShow.current.children[0];

            slideShow.current.style.transition = '300ms ease-out all';

            const sizeSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

            const Transition = () => {

                slideShow.current.style.transition = 'none'
                slideShow.current.style.transform = `translateX(0)`;

                slideShow.current.appendChild(firtsElement)
                slideShow.current.removeEventListener('transitionend', Transition)
            }

            slideShow.current.addEventListener('transitionend', Transition)
        }
    }
    const After = () => {
        if (slideShow.current.children.length > 0) {
            const Index = slideShow.current.children.length - 1;
            const endElement = slideShow.current.children[Index];
            slideShow.current.insertBefore(endElement, slideShow.current.firstChild)

            slideShow.current.style.transition = 'none';

            const sizeSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = '300ms ease-out all';

                slideShow.current.style.transform = `translateX(0)`;

            }, 30)
        }
    }
    return (
        <div className="carousel">
            <div className="slide-show" ref={slideShow}>
                <div className="slide pet">
                    <button className="butpet"
                        onClick={onClickButton}
                    >
                        <img src={Img1} alt="" className="img1" />
                    </button>
                    <div className="container-text">
                        <p>{f("carousel.p1")}</p>
                    </div>
                </div>
                <div className="slide">
                    <button
                        onClick={onClickButton2}
                    >
                        <img src={Img2} alt="" className="img" />
                    </button>
                    <div className="container-text">
                        <p>{f("carousel.p2")}</p>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="button1"
                    onClick={After}
                >
                    <BsChevronCompactLeft />
                </button>
                <button className="button2"
                    onClick={Next}
                >
                    <BsChevronCompactRight />
                </button>
            </div>
        </div>
    )
}
export default Carousel;