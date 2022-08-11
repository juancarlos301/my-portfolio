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
                viewport={{ once: true }}
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
                whileInView={{ backgroundColor: "rgba(2, 14, 53, 0.979)" }}
                viewport={{ once: true }}
                transition={{
                    duration: 1
                }}
            >
                <div className="div-skills">
                    <div className="div-of-h1-skills">
                    <motion.h2 className="h1-skills"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1.2 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            type: "spring"
                        }}

                    >{f("navbar.skills")}</motion.h2>
                    </div>
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
                        <motion.h2 className="h1-lenguages"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1.2 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                type: "spring"
                            }}
                        >
                            <a name="skills" href="none" className="apunto">.</a>
                            {f("skills.languages")}</motion.h2>
                    </div>
                    <motion.div className="div-col"
                        initial={{ x: 100 }}
                        whileInView={{ x: 1 }}
                        viewport={{ once: true }}
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
                        viewport={{ once: true }}
                        transition={{
                            duration: 3.5,
                            ease: "easeOut",
                            type: "spring"
                        }}>
                        <img src={usa} alt="" />
                        <h2>A2</h2>
                    </motion.div>
                </div>

                <div className="con-hobbies">
                    <Hobbies
                        f={f}
                        view={props.view}
                    />
                </div>
            </motion.div>
            <div className="container-carousel">
                <a name="abajo" href="none" className="apunto2">.</a>
                <div className="div-title-portfolio">
                <h1>{f("navbar.portfolio")}</h1>
                </div>
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