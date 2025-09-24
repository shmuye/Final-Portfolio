import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-white">
            <motion.div
                className="w-12 h-12 bg-brand-light rounded-full border border-brand-dark"
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default Loader;
