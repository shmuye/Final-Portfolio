import React from "react";
import { motion } from "framer-motion";

const Service = ({ icon, title, description }) => {
    // Define animation variants
    const iconVariants = {
        initial: { scale: 1, x: 0, y: 0 },
        hover: { scale: 1.5, x: 10, y: 0 },
    };

    return (
        <motion.div
            className="flex flex-col items-center hover:shadow-sm shadow-brand-dark justify-start rounded-2xl gap-2 py-4 px-6 w-full md:w-1/3"
            whileHover="hover"
            initial="initial"
        >
            <motion.div variants={iconVariants}>{icon}</motion.div>
            <h3 className="title">{title}</h3>
            <p className="pElement">{description}</p>
        </motion.div>
    );
};

export default Service;
