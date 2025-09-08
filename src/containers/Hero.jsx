import React from 'react'
import HeroImage   from '../assets/Hero.png'
const Hero = () => {
    return (
        <section
            style={{backgroundImage: `url(${HeroImage})`}}
            className="bg-[url(HeroImag)] w-full min-h-screen  top-5 mt-16  bg-cover bg-center p-4">
            <div className="absolute right-4  md:right-32 top-64">

                <p className="font-bold text-heading md:text-hero text-white">
                    HI,I am Shmuye Ayalneh.
                </p>
                <p className="font-bold text-heading md:text-hero text-white">
                    <span className="text-brand-dark">Full Stack </span>Developer.
                </p>
            </div>
        </section>
    )
}
export default Hero
