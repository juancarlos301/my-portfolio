import React from "react";
import { motion } from "framer-motion";
import Skill from "./skill";
import Carousel from './carousel'
import Footer from "../components/Footer";
import Hobbies from "./Hobbies";

//imagenes
import col from '../image/col.png'
import usa from '../image/uss.png'
import ir from '../image/React.svg'
import Js from '../image/js.png'
import css from '../image/css.png'
import html from '../image/html.png'
import bs from '../image/boot.png'
import tall from '../image/tall.png'

//css
import '../styles/PhraseAndSkills.css'
import imape from '../image/perfil.jpg'
import ButtonCv from "./buttonccv";
const PhraseAndSkills = (props) => {
    const hola = [
        { url: html, id: "1" },
        { url: css, id: "2" },
        { url: Js, id: "3" },
        { url: ir, id: "4" },
        { url: bs, id: "5", name: "Bootstrap" },
        { url: tall, id: "6", name: "Tallwindcss" }
    ]
    const f = props.t


    return (
        <div className="uno">
            <motion.div className="container-p"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.4 }}
                transition={{
                    duration: 2
                }}
            >
                <div className="div-probar">
                    <div className="parAndimg">
                        <p className="parrafo-1">"{f("skills.sentence")}"</p>
                        <img className="imagenn" src={imape} alt="" />
                    </div>
                    <div>
                        <ButtonCv f={f} />
                    </div>
                </div>
            </motion.div>
            <motion.div className="containerin"
                whileInView={{ backgroundColor: "#0a081e" }}
                transition={{
                    duration: 1
                }}
            >
                <div className="div-skills">
                    <motion.h1 className={props.view === 'es' ? "h1-skills spanish" : "h1-skills"}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1.2 }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            type: "spring"
                        }}

                    >{f("navbar.skills")}</motion.h1>
                    {hola.map(i => (
                        <Skill
                            imag={i.url}
                            key={i.id}
                            name={i.name}
                        />
                    ))}
                </div>
                <div className="container-alllenguages">
                    <div className="containerh1">
                        <motion.h1 className="h1-lenguages"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1.2 }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                type: "spring"
                            }}
                        >
                            <a name="skills" href="none" className="apunto">.</a>
                            {f("skills.languages")}</motion.h1>
                    </div>
                    <motion.div className="div-col"
                        initial={{ x: 100 }}
                        whileInView={{ x: 1 }}
                        transition={{
                            duration: 3.5,
                            ease: "easeOut",
                            type: "spring"
                        }}

                    >
                        <img src={col} alt="" />
                        <h2>C2</h2>
                    </motion.div>
                    <motion.div className="div-col"
                        initial={{ x: 150 }}
                        whileInView={{ x: 1 }}
                        transition={{
                            duration: 3.5,
                            ease: "easeOut",
                            type: "spring"
                        }}>
                        <img src={usa} alt="" />
                        <h2>A2</h2>
                    </motion.div>
                </div>

                <div className="hobbies-c">
                    <Hobbies
                        f={f}
                        view={props.view}
                    />
                </div>
            </motion.div>
            <div className="container-carousel">
                <a name="abajo" href="none" className="apunto2">.</a>
                <h1>{f("navbar.portfolio")}</h1>
                <Carousel
                />
            </div>
            <div className="container-footer">
                <a name="footer" href="none">-</a>
                <Footer
                    f={f}
                />
            </div>
        </div>
    )
}
export default PhraseAndSkills;