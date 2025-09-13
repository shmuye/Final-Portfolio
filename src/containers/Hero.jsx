import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage from "../assets/Hero.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const roles = ["Full Stack Developer", "Mobile Developer", "UI/UX Designer"];
    const [index, setIndex] = useState(0);

    // Change role every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section
            id="home"
            style={{ backgroundImage: `url(${HeroImage})` }}
            className="w-full min-h-screen mt-16 bg-cover bg-center p-4 flex items-center justify-center"
        >
            <div className="flex flex-col items-center text-center gap-6">
                <div>
                    <p className="font-bold text-heading md:text-hero text-white">
                        HI, I am Shmuye Ayalneh.
                    </p>
                    <p className="font-bold text-heading md:text-hero text-white">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roles[index]} // triggers animation when text changes
                                className="text-brand"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                            >
                                {roles[index]}
                            </motion.span>
                        </AnimatePresence>
                    </p>
                </div>

                {/* Infinite bouncing button */}
                <motion.button
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="mt-6"
                >
                    <ArrowDown size={48} color="#0cf1f4" />
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
