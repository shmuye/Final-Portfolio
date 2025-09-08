import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'
import { photo } from '../assets/'
const About = () => {
    return (
        <section className="p-4 mx-auto" id="about">
            <h2 className="text-center text-subheading mb-4"><span className="text-brand-dark font-bold">About</span> Me</h2>
            <div className="flex flex-col md:flex-row  gap-4">
                <article
                    className="p-2 w-full md:w-1/2">
                    <div className="text-body text-center flex flex-col  gap-1">
                        <p className="text-left">
                           I’m Shmuye Ayalneh , a dedicated software engineering student
                           and  and aspiring Full Stack developer.
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
                        <div className="mt-4 flex justify-start items-center gap-4">
                            <a
                                className="bg-brand-dark hover:bg-brand hover:cursor-pointer py-2 px-4 text-white">Resume</a>
                            <a
                                className=" border border-brand-dark hover:bg-brand hover:cursor-pointer py-2 px-4 text-brand-dark">Get In Touch</a>
                        </div>

                    </div>
                </article>
                <div className="flex flex-col gap-4">
                    <img
                        src={photo} alt="myimage"
                        className="w-full md:w-[400px]"
                    />
                    <div className="flex justify-center items-center gap-4">
                        <FaGithub className=" text-brand-dark hover:text-brand" size={24} />
                        <FaTwitter className=" text-brand-dark hover:text-brand" size={24} />
                        <FaLinkedin className=" text-brand-dark hover:text-brand" size={24} />
                        <FaFacebook className=" text-brand-dark hover:text-brand" size={24} />
                    </div>
                </div>

            </div>

        </section>
    )
}
export default About
