import React from 'react'
import { FaGithub, FaFacebook, FaTwitter,  FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <section
            className="min-h-[50vh] bg-dark-gray flex flex-col md:flex-row justify-center gap-16">

                <section className="">
                    <h2 className="text-brand text-subheading">More About Me</h2>
                </section>
                <section className="">
                    <h2 className="text-brand text-subheading">Links</h2>
                </section>
            <section className="">
                <h2 className="text-brand text-subheading">social media</h2>
                <div className="flex gap-4">
                    <FaGithub className="text-brand-dark hover:text-brand" size={24} />
                    <FaTwitter className="text-brand-dark hover:text-brand" size={24} />
                    <FaLinkedin className="text-brand-dark hover:text-brand" size={24} />
                    <FaFacebook className="text-brand-dark hover:text-brand" size={24} />
                </div>
            </section>


        </section>
    )
}
export default Footer
