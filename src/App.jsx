import React from 'react'

import {  Hero, About, Skills, Services, Projects, Contact, Footer } from './containers'
import { NavBar } from "./components";
import {useState, useEffect} from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScollToTop.jsx";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    },5000)
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="flex flex-col gap-5 min-h-screen font-merriweather">
            <NavBar />
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
