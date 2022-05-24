import React from "react";
import '../styles/Personal.css'
import { motion } from "framer-motion";

const MyPersonal = (props) => {

    const f = props.t

    return (

        <div className="container"
        >

            <div className="text-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 3
                    }}
                    viewport={{ once: true }}
                >
                    <p>{f("my-personal.p1")}</p>
                    <p>{f("my-personal.p2")}</p>
                    <p>{f("my-personal.p3")}</p>
                </motion.div>
            </div>
        </div>
    )
}
export default MyPersonal;