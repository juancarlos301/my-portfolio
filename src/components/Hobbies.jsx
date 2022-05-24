import React from "react";
import { motion } from "framer-motion";
//img
import imagenL from '../image/leer.png'
import imagenE from '../image/salud.png'
import imagenA from '../image/ajedrez.png'

//css
import '../styles/Hobbies.css'
const Hobbies = (props) => {

    const f = props.f

    return (
        <div className="c-hobbies">

            <motion.p className="p-first"
                initial={{ x: 300 }}
                whileInView={{ x: 1 }}
                transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    type: "spring"
                }}>
                {f("skills.hobbies")}</motion.p>
            <div className="hobbies">


                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <p>{f("skills.read")}</p>
                    <img src={imagenL} alt=""></img>
                </motion.div>
                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <p>{f("skills.ejercise")}</p>
                    <img src={imagenE} alt=""></img>
                </motion.div>
                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        type: "spring"
                    }}>
                    <p>{f("skills.play")}</p>
                    <img src={imagenA} alt=""></img>
                </motion.div>
                <motion.div className="hobbie-punto"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 3.5,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <p>{f("skills.other")}</p>
                    <div className="punto"></div>
                    <div className="punto"></div>
                    <div className="punto"></div>
                </motion.div>
            </div>

        </div>
    )
}
export default Hobbies;

