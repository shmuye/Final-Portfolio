import { useState } from 'react';
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({siteUri, githubUri, imageUri, name, description }) => {
    const [hover, setHover] = useState(false);

    const { ref, inView } = useInView(
        {
            triggerOnce: false,
            threshold: 0.2
        })
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut"} },
    }
    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative w-full min-h-[400px] md:w-[28%] bg-white dark:bg-slate-900 rounded-2xl shadow-sm transition-transform"
        >
            <a
                href={githubUri}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col"
                >
                <img
                    src={imageUri}
                    alt={name}
                    className="w-full h-[200px] rounded-t-2xl object-cover" />
                <h3 className="p-3 title">{name}</h3>
                <p className="pElement text-dark-gray pb-4 px-3">{description}</p>
            </a>
            {hover && (
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-brand-dark/90 rounded-2xl">
                    <a
                        href={githubUri}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-dark-gray rounded-md shadow"
                        >
                       <Code2 size={16} />
                         Source Code
                     </a>

                    { siteUri &&
                        <a
                            href={siteUri}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-dark-gray rounded-md shadow"
                           >
                            View Site
                            <ArrowUpRight  size={16} />
                        </a>
                    }

                </div>
            )}
        </motion.div>
    );
};

export default Project;