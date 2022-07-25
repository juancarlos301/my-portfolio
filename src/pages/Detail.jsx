import React, { useContext } from "react";
import { AppContext } from "../context";
import FirtsImage from "../components/pagesmodals/FirtsImage";
import SecundImage from "../components/pagesmodals/secundImage";
import ThirdImage from "../components/pagesmodals/thirdImage";
import FourthImage from "../components/pagesmodals/fourthImage";
import '../styles/index.css'

const Detail = () => {

    const { openProject2, setOpenProject2, t } = useContext(AppContext)

    const viewModal = () => {
        if (openProject2 === 0) {
            return <FirtsImage
                f={t}
            />
        } else if (openProject2 === 1) {
            return <SecundImage
                setOpenProyect2={setOpenProject2}
                f={t}
            />
        } else if (openProject2 === 2) {
            return <ThirdImage
                setOpenProyect2={setOpenProject2}
                f={t}
            />
        } else if (openProject2 === 3) {
            return <FourthImage
                setOpenProyect2={setOpenProject2}
                f={t}
            />
        }

    }
    return (
        <div className="backDetail">
            {viewModal()}
        </div>
    )
}
export default Detail; 