import React from 'react'
import {useState, useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView} from "react-intersection-observer";

const Counter = ({from , to , duration}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true})
    const [value, setValue] = useState(from)

    useEffect(() => {
        if (inView) {
            controls.start({
                value: to,
                transition: { duration, ease: "easeOut" },
            });
        }
    }, [controls, inView, to, duration]);

    return (
        <motion.span
            className="font-bold"
            ref={ref}
            animate={controls}
            initial={{ value: from }}
            onUpdate={(latest) => setValue(Math.floor(latest.value))}
        >
            {value}
        </motion.span>
    )
}

const Status = () => (
    <section className="flex justify-center gap-6 p-4 my-2 rounded-sm shadow-md ">
        <div className="flex flex-col gap-2">
            <p className="text-body font-bold whitespace-nowrap">Year Of Experience</p>
            <Counter  from={0} to={2} duration={1} />

        </div>
        <div className="flex flex-col gap-2">
            <p className="no-wrap text-body font-bold whitespace-nowrap">Projects Completed</p>
            <Counter  from={0} to={4} duration={1} />
        </div>
    </section>
);

export default Status;