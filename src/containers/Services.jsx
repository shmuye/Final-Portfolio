import React from 'react'
import {Code2, PhoneIcon,PencilRuler} from "lucide-react";
import Service from '../components/Service'
import SectionHeading from "../components/SectionHeading.jsx";
// import { serviceImage } from "../assets/index.js";

const services = [
    {
        title: 'Full Stack Development',
        description: 'From pixel-perfect frontends to high-performance backends, I deliver the full package. ' +
            'I transform ideas into full-stack reality using the React and Node.js ecosystem',
        icon: <Code2 />
    },
    {
        title: 'UI/UX Design',
        description: 'I design intuitive, user-centric interfaces using figma ',
        icon: <PencilRuler  />
    },
    {
        title: 'Mobile App Development',
        description: 'I Build beautiful, native-quality mobile apps for Android and iOS with Flutter & Jetpack Compose ',
        icon: <PhoneIcon />
    },
]



const Services = () => {
    return (
        <section
            id="services"
            className="section dark:bg-black/90 transition-colors duration-500"


        >
            <SectionHeading content="Services" />
            <div className="w-full flex flex-col items-center justify-center md:flex-row min-h-[60vh] gap-4 p-4">
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
