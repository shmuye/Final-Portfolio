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
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-4 my-2 rounded-sm shadow-sm shadow-brand-light bg-light-gray">
        <div className="flex flex-col gap-2">
            <p className="text-body font-bold whitespace-nowrap">Year Of Experience</p>
            <Counter className="font-bold text-2xl" from={0} to={2} duration={1} />

        </div>
        <div className="flex flex-col gap-2">
            <p className="no-wrap text-body font-bold whitespace-nowrap">Projects Completed</p>
            <Counter className="font-bold text-2xl" from={0} to={4} duration={1} />
        </div>
    </section>
);

export default Status;