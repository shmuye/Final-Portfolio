import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <section
            className="section bg-slate-800">
            <div className="flex flex-col px-4 py-8 gap-4   md:flex-row md:justify-between  md:items-start md:py-0 md:px-8 ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-subheading">Basic Info</h2>
                    <ul className="flex flex-col gap-2 text-white text-body">
                        <li className="flex">
                            <span className="font-bold w-40">Full Name:</span>
                            <span>Shmuye Ayalneh</span>
                        </li>
                        <li className="flex">
                            <span className="font-bold w-40">Date of Birth:</span>
                            <span>Feb 10, 2003</span>
                        </li>
                        <li className="flex">
                            <span className="font-bold w-40">Expertise:</span>
                            <span>Full Stack Development</span>
                        </li>
                        <li className="flex">
                            <span className="font-bold w-40">Tech Stack:</span>
                            <span>ReactJs | NodeJs</span>
                        </li>
                        <li className="flex">
                            <span className="font-bold w-40">Hobbies:</span>
                            <span>Sport | Reading | Music</span>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-subheading" >Links</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            (["Home", "About", "Skills", "Services","Projects","Contact"].map((item, i) => (

                                <motion.li
                                   whileHover={{  x: -10, y: 0 }}
                                    key={i}>
                                       <a
                                           className="text-brand hover:text-brand-dark text-body"
                                           href={`#${item.toLowerCase()}`}>{item}</a>
                                   </motion.li>
                            )))
                        }
                    </ul>
                </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-subheading">Social</h2>
                <div className="flex gap-4">
                    <motion.a
                        whileHover={{  scale: 1.2, y:  -2}}
                        href="https://github.com/shmuye">
                        <FaGithub className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{  scale: 1.2, y:  -2}}
                        href="https://X.com/shudev27">
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
export default Footer
