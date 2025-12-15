import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Rocket } from "lucide-react";

const Counter = ({ from, to, duration }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (inView) {
            controls.start({
                value: to,
                transition: { duration, ease: "easeOut" }
            });
        }
    }, [controls, inView, to, duration]);

    return (
        <motion.span
            ref={ref}
            animate={controls}
            initial={{ value: from }}
            onUpdate={(latest) => setValue(Math.floor(latest.value))}
            className="font-bold"
        >
            {value}
        </motion.span>
    );
};

const Status = () => (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 my-6 border border-light-gray dark:border-dark-gray rounded-xl">
        {/* Years of Experience */}
        <div className="flex flex-col gap-2 items-center">
            <span className="text-brand-dark text-subheading dark:text-light-gray">
                <Counter from={0} to={2} duration={1} />+
            </span>

            <div className="flex items-center gap-2">
                <Briefcase size={24} className="text-brand-dark dark:text-brand" />
                <p className="text-body font-semibold whitespace-nowrap dark:text-light-gray">
                    Years of Experience
                </p>
            </div>
        </div>

        {/* Projects Completed */}
        <div className="flex flex-col gap-2 items-center">
            <span className="text-brand-dark text-subheading dark:text-light-gray">
                <Counter from={0} to={4} duration={1} />+
            </span>

            <div className="flex items-center gap-2">
                <Rocket size={24} className="text-brand-dark dark:text-brand" />
                <p className="text-body font-semibold whitespace-nowrap dark:text-light-gray">
                    Projects Completed
                </p>
            </div>
        </div>
    </section>
);

export default Status;
