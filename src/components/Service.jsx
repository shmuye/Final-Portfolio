import React from 'react'
import { motion } from "framer-motion"

const Service = ({icon, title, description}) => {
    return (
        <div className="flex flex-col items-center hover:shadow-sm shadow-brand-dark justify-start  rounded-2xl  gap-2 py-4 px-6 w-full md:w-1/3">
            <motion.button
                whileHover={{ scale: 1.5, x: 10, y: 0 }}
            >
                {icon}
            </motion.button>
            <h3 className="title">{title}</h3>
            <p className="pElement">{description}</p>
        </div>
    )
}
export default Service
