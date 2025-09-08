import React from 'react'
import { FaCode, FaFigma, FaMobile } from "react-icons/fa";
import Service from '../components/Service'

const services = [
    {
        title: 'Full Stack Development',
        description: 'From pixel-perfect frontends to high-performance backends, I deliver the full package. ' +
            'I transform ideas into full-stack reality using the React and Node.js ecosystem',
        icon: <FaCode />
    },
    {
        title: 'UI/UX Design',
        description: 'I design intuitive, user-centric interfaces using figma ',
        icon: <FaFigma />
    },
    {
        title: 'Mobile App Development',
        description: 'I Build beautiful, native-quality mobile apps for Android and iOS with Flutter & Jetpack Compose ',
        icon: <FaMobile />
    },
]



const Services = () => {
    return (
        <section
            id="services"
            className=""
        >
            <h2 className="text-brand-dark text-subheading text-center">Services</h2>
            <div className="w-full flex flex-col items-center justify-center md:flex-row min-h-screen gap-4 p-4">
                {
                    services.map((service, index) => (
                        <Service key={index} {...service} />
                    ))
                }
            </div>
        </section>
    )
}
export default Services
