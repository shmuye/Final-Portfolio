import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { photo } from "../assets/";
import SectionHeading from "../components/SectionHeading.jsx";
import Status from "../components/Status.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="section dark:bg-black/90" id="about">
            <SectionHeading content="About Me" />

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 transition-colors duration-500">
                
                {/* LEFT TEXT SECTION */}
                <motion.article
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    className="p-4 w-full md:w-1/2"
                >
                    <div className="flex flex-col gap-4 border-l border-light-gray dark:border-dark-gray pl-4">
                        <p className="text-body text-left dark:text-light-gray">
                            I’m <span className="font-semibold">Shmuye Ayalneh</span>, 
                            a passionate and dedicated Full Stack Developer.
                        </p>

                        <p className="text-body text-left dark:text-light-gray">
                            Over the past three years, I have been mastering 
                            full-stack web development using ReactJS and NodeJS—
                            building scalable applications and solving real-world problems. 
                            I’m detail-oriented, a strong problem solver, and highly disciplined.
                        </p>

                        <p className="text-body text-left dark:text-light-gray">
                            I am currently seeking opportunities as a React Developer or 
                            Full Stack Developer where I can contribute my skills and build 
                            impactful digital solutions.
                        </p>

                        <Status />

                        {/* Buttons */}
                        <div className="mt-4 flex items-center gap-4">
                            <a
                                href="https://drive.google.com/file/d/12Gpxa328Z-781uJqyAUvPaCdYMaoFVo5/view?usp=sharing"
                                className="bg-brand text-white p-3 text-sm whitespace-nowrap hover:bg-brand-dark transition"
                            >
                                Resume
                            </a>

                            <a
                                href="#contact"
                                className="border border-brand-dark p-3 text-sm whitespace-nowrap transition dark:text-white"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </motion.article>

                {/* RIGHT IMAGE + SOCIAL MEDIA SECTION */}
                <div className="flex flex-col items-center gap-6">
                    <img
                        src={photo}
                        alt="profile"
                        className="w-full md:w-[400px] rounded-md shadow-sm"
                    />

                    {/* Socials */}
                    <div className="flex justify-center items-center gap-6 mb-4">
                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://github.com/shmuye"
                        >
                            <FaGithub className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://X.com/shudev27"
                        >
                            <FaTwitter className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://www.linkedin.com/in/shmuye-ayalneh/"
                        >
                            <FaLinkedin className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://www.facebook.com/share/16jQ8s0gyB/"
                        >
                            <FaFacebook className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
