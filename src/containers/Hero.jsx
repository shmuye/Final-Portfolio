import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage from "../assets/Hero.png";
import { ArrowDown } from "lucide-react";
import {useInView} from "react-intersection-observer";
import { NavBar } from "../components";

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
        <>
        <NavBar />
       <section
  id="home"
  className="w-full min-h-screen flex items-center bg-cover bg-center relative"
  style={{ backgroundImage: `url(${HeroImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={variants}
    className="relative z-10 max-w-6xl w-full px-6 md:px-12"
  >
    <div className="max-w-xl text-left space-y-4">
      <p className="font-bold text-heading md:text-hero text-white">
        Hi, I am <span className="text-brand">Shmuye Ayalneh</span>
      </p>
      <div className="space-y-2">

      <p className="text-brand text-heading md:text-hero uppercase font-semibold">
         Creative
     </p>
     <p className="font-bold text-heading md:text-hero text-white">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-brand"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </p>

      </div>
      
    </div>
  </motion.div>
</section>

         </>
    );
};

export default Hero;
