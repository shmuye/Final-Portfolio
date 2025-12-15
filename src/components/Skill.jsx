import React from 'react';
import { motion } from "framer-motion";

const Skill = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center gap-3 w-fit">
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-md shadow-brand/20"
            >
                <img src={icon} alt={name} className="w-8 h-8" />
            </motion.div>
            <p className="text-body text-center dark:text-white text-black">{name}</p>
        </div>
    );
};

export default Skill;
