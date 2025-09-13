import React from 'react'
import  Button  from '../components/Button.jsx'
import SectionHeading from "../components/SectionHeading.jsx";
import {PhoneCall, MailIcon, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="section"
        >
            <h2 className='text-subHeading text-dark-gray text-center'>Let's Solve Problems together</h2>
            <SectionHeading content="Get In touch" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <form className="flex flex-col gap-4" action="https://formsubmit.co/<EMAIL>" method="POST">
                <div className="flex flex-col items-start gap-2">
                    <label className="label">Your Name: </label>
                    <input
                        className="input"
                        name="name"
                        type='text'
                        placeholder="Enter your Name"
                        required
                    />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label className="label">Your Email:</label>
                    <input
                        className="input"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="flex flex-col  items-start gap-2">
                    <label
                        className="label">
                        Your Message:
                    </label>
                    <textarea
                        className="p-2 border-2 w-[400px] h-[200px] border-light-gray rounded-md text-body"
                        placeholder="Enter your Message"
                        required

                    />

                </div>
               <Button type="submit" width={400} text="Submit" />


            </form>
            <div className="p-2 w-[400px] flex flex-col items-center gap-3">
                <div className=" flex flex-col items-center gap-2">
                    <PhoneCall   color="#007079" size={24} />
                    <p className="text-body">+251933191480</p>
                </div>
                <div className=" flex flex-col items-center gap-2">
                    <MailIcon  color="#007079" size={24} />
                    <p className="text-body">shmuye27@gmail.com</p>
                </div>
                <div className=" flex flex-col items-center gap-2">
                    <MapPin   color="#007079" size={24} />
                    <p className="text-body">Address: Addis Ababa, Ethiopia</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Contact
