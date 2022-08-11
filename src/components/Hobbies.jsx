import React from "react";
import { motion } from "framer-motion";


//img

import { FaChessKnight, FaBook, FaVolleyballBall } from "react-icons/fa";


//css
import '../styles/Hobbies.css'
const Hobbies = (props) => {

    const f = props.f

    return (
        <div className="c-hobbies">
            <div className="container-title">
            <motion.h2 className="p-first"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.2 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    type: "spring"
                }}>
                {f("skills.hobbies")}</motion.h2>
            </div>
            <div className="hobbies">
                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <div className="textPas">
                        <p>{f("skills.read")}</p>
                    </div>
                    <FaBook size="100px" fill="white" />
                </motion.div>
                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2.5,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <div className="textPas">
                        <p>{f("skills.ejercise")}</p>
                    </div>
                    <FaVolleyballBall size="100px" fill="white" />
                </motion.div>
                <motion.div className="hobbie"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        type: "spring"
                    }}>
                    <div className="textPas">

                        <p>{f("skills.play")}</p>
                    </div>
                    <FaChessKnight size="100px" fill="white" />
                </motion.div>
                <motion.div className="hobbie-punto"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}

                    transition={{
                        duration: 3.5,
                        ease: "easeOut",
                        type: "spring"
                    }}
                >
                    <div className="textPas">
                        <p>{f("skills.other")}</p>
                    </div>
                    <div className="punto"></div>
                    <div className="punto"></div>
                    <div className="punto"></div>
                </motion.div>
            </div>

        </div>
    )
}
export default Hobbies;

