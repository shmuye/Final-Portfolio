import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'
import { Copyright } from "lucide-react";


const Footer = () => {
    return (
        <section
            className="section bg-dark-gray">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:items-start gap-16">
                <div className="flex flex-col gap-4 items-center md:items-start">
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
                            <span>Coding | Reading | Playing Football</span>
                        </li>
                        <li className="flex">
                            <span className="font-bold w-40">Current Job:</span>
                            <span>Software Engineering Student | Full Stack Developer</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h2 className="text-white text-subheading">Links</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            (["Home", "About", "Skills", "Services","Projects","Contact"].map((item, i) => (

                                <li key={i}>
                                       <a
                                           className="text-brand text-body"
                                           href={`#${item.toLowerCase()}`}>{item}</a>
                                   </li>
                            )))
                        }
                    </ul>
                </div>
            <div className="flex flex-col items-center md:items-start gap-4">
                <h2 className="text-white text-subheading ">Social</h2>
                <div className="flex gap-4">
                    <FaGithub className="text-brand cursor-pointer" size={24} />
                    <FaTwitter className="text-brand cursor-pointer" size={24} />
                    <FaLinkedin className="text-brand cursor-pointer" size={24} />
                    <FaFacebook className="text-brand cursor-pointer" size={24} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-center">
                <span className="text-white text-body">Copyright</span>
                <Copyright color="white" size={24} />
                <span className="text-white text-body">
    {new Date().getFullYear()} Shmuye Ayalneh. All rights reserved — designed by Shmuye Ayalneh.
  </span>
            </div>

        </section>
    )
}
export default Footer
