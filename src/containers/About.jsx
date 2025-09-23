import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'
import { photo } from '../assets/'
import SectionHeading from "../components/SectionHeading.jsx";
import Status from "../components/Status.jsx";
import { motion } from "framer-motion";
const About = () => {
    return (
        <section className="section" id="about">
            <SectionHeading content="About Me" />
            <div className="flex justify-center flex-col md:flex-row  gap-4">
                <article
                    className="p-2 w-full md:w-1/2">
                    <div className="text-body text-center flex flex-col  gap-1">
                        <p className="text-left">
                           I’m Shmuye Ayalneh , a dedicated software engineering student
                           and  and aspiring Full Stack Developer.
                        </p>
                        <p className="text-left">
                            Over the past three years, I have been focusing on mastering
                            full stack web development using ReactJs and NodeJs, building
                            scalable applications, and solving real-world problems through technology.
                            I’m detail oriented a strong problem solver and highly disciplined in
                            my approach to both learning and building.
                        </p>
                        <p className="text-left">
                            My long term goal is to expand my expertise into the field of
                            Artificial intelligence, whereI can combine my development skills
                            with intelligent systems to create impactful solutions.
                        </p>
                        <Status />
                        <div className="mt-4 flex justify-start items-center gap-4">
                            <a
                                href="/Resume.pdf"
                                download="Shmuye_Ayalneh_Resume.pdf"
                                className="bg-brand-dark text-white hover:bg-brand hover:text-brand-dark hover:cursor-pointer py-3 px-4  rounded-sm">DownLoad Resume</a>
                            <a
                                href="#contact"
                                className=" border border-brand-dark hover:bg-brand-dark hover:cursor-pointer py-3 px-4 text-brand-dark hover:text-white rounded-sm">Get In Touch</a>
                        </div>

                    </div>
                </article>
                <div className="flex flex-col gap-4">
                    <img
                        src={photo} alt="myimage"
                        className="w-full md:w-[400px]"
                    />
                    <div className="flex justify-center items-center gap-4">
                        <motion.a
                            whileHover={{  scale: 1.2, y:  -2}}
                            href="https://github.com/shmuye">
                            <FaGithub className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{  scale: 1.2, y:  -2}}
                            href="https://X.com/shmuye">
                            <FaTwitter className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{  scale: 1.2, y:  -2}}
                            href="https://www.linkedin.com/in/shmuye-ayalneh/">
                            <FaLinkedin className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{  scale: 1.2, y:  -2}}
                            href="https://www.facebook.com/share/16jQ8s0gyB/">
                            <FaFacebook className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                        </motion.a>


                    </div>
                </div>

            </div>

        </section>
    )
}
export default About
