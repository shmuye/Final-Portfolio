import React from "react";
import { motion } from "framer-motion";

const Button = ({ width, text }) => {
    return (
        <motion.button
            whileHover="hover"
            className={`relative overflow-hidden btn ${width} `}
        >
            {/* Ripple Layer */}
            <motion.span
                variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                }}
                initial="initial"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand z-0"
            />

            {/* Text should stay above the ripple */}
            <span className="relative z-10">{text}</span>
        </motion.button>
    );
};

export default Button;