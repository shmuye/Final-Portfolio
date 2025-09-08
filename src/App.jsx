import React from 'react'

import {  Hero, About, Skills, Services, Projects, Contact, Footer } from './containers'
import { NavBar } from "./components";

const App = () => {
    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
export default App
