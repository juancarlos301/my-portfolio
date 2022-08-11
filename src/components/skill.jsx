import React from "react";
import '../styles/PhraseAndSkills.css'
import { motion } from "framer-motion";
const Skill = (props) => {


    return (
        <motion.div className="skills"
            initial={{ x: -100 }}
            whileInView={{ x: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 3.5,
                ease: "easeOut",
                type: "spring"
            }}
        >
            <img src={props.imag} alt="" />
            <p>{props.name}</p>
        </motion.div>
    )
}
export default Skill;