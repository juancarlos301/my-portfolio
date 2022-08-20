import React, { useContext } from "react";
import Navbar from '../components/Navbar';
import MyPersonal from "../components/MyPersonal";
import { motion } from "framer-motion";
import PhraseAndSkills from '../components/phraseAndSkills'
import { AppContext } from "../context";

//css
import '../styles/index.css'

const Header = () => {

    const { t, i18n, choose, setChoose } = useContext(AppContext)


    const onclickChoose = () => {
        i18n.changeLanguage("en")
        setChoose(prevState => !prevState)
    }
    const onclickChooseSpanish = () => {
        i18n.changeLanguage("es")
        setChoose(prevState => !prevState)
    }


    return (
        <div className="page">
            <div className="container-1">
                <Navbar
                    t={t} />

                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2.3,
                        ease: "easeInOut",
                        delay: 4,
                        type: "spring"
                    }}

                >{t("presents.me")}</motion.h1>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        delay: 4,
                        type: "spring"
                    }}
                    className="div-frontend"
                >
                    <h2>
                    Frontend
                    </h2>
                    <h2>
                    developer
                    </h2>
                    </motion.div>
                {choose && (
                    <motion.div className="container-buttonsl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            delay: 6,
                            type: "spring"
                        }}
                    >
                        <div className="buttonsl">
                            <div className="con-h3">
                                <h3>{t("presents.select")}</h3>
                            </div>
                            <button
                                onClick={onclickChoose}
                            >
                                English
                            </button>
                            <button
                                onClick={onclickChooseSpanish}
                            >
                                Español
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            {!choose && (
                <>
                    <div className="container-2">
                        <a name="my" href="none" className="anchor">.</a>
                        <MyPersonal
                            t={t}
                        />
                    </div>
                    <div className="container-3" >
                        <PhraseAndSkills
                            t={t}
                        />
                    </div>
                </>
            )}
        </div >
    )
}
export default Header;
