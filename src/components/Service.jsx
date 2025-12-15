import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = ({ icon, title, description }) => {
    // Define animation variants
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
    const iconVariants = {
        initial : { scale: 1, x: 0 },
        hover: { scale: 1.25, x: 8, transition: { duration: 0.3  } },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-start w-full md:w-1/3  min-h-[240px] rounded-2xl border border-brand-dark dark:border-brand py-4 px-6 gap-2 shadow-sm"



        >
            <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="hover"
                className="text-brand-dark dark:text-brand"
              >
                {icon}
            </motion.div>
            <h3 className="title">{title}</h3>
            <p className="pElement">{description}</p>
        </motion.div>
    );
};

export default Service;
