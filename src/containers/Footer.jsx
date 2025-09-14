import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'



const Footer = () => {
    return (
        <section
            className="section bg-dark-gray">
            <div className="flex flex-col  md:flex-row md:justify-center md:items-start gap-16 pl-8 md:pl-0">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-subheading">More About Me</h2>
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
                        <li className="flex">
                            <span className="font-bold w-40">Current Job:</span>
                            <span>Software Engineering Student | Full Stack Developer</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-subheading">Links</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            (["Home", "About", "Skills", "Services","Projects","Contact"].map((item, i) => (

                                <li key={i}>
                                       <a
                                           className="text-brand hover:text-brand-dark text-body"
                                           href={`#${item.toLowerCase()}`}>{item}</a>
                                   </li>
                            )))
                        }
                    </ul>
                </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-subheading">Social</h2>
                <div className="flex gap-4">
                    <FaGithub className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                    <FaTwitter className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                    <FaLinkedin className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                    <FaFacebook className="text-brand hover:text-brand-dark cursor-pointer" size={24} />
                </div>
              </div>
            </div>


        </section>
    )
}
export default Footer
