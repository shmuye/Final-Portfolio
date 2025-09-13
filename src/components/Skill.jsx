import React from 'react'
import {motion} from "framer-motion";

const Skill = ({icon, name}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2  w-fit">
            <div className="shadow-sm shadow-brand-dark flex justify-center items-center w-16 h-16 bg-white rounded-full ">
                <motion.img
                    whileHover={
                    {   scale: 1.5,

                    }}
                    src={icon} alt={name} className="w-4 h-4" />
            </div>
            <p className="text-body">{name}</p>
        </div>
    )
}
export default Skill
