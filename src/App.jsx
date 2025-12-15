import React from 'react'

import {  Hero, About,Skills, Services, Projects, Contact, Footer } from './containers'
import { NavBar } from "./components";
import ScrollToTop from "./components/ScollToTop.jsx";



const App = () => {
    return (
        <div className="flex relative flex-col  min-h-screen font-lora">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    )
}
export default App
