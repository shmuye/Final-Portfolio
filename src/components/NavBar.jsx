import { MenuIcon, X } from "lucide-react";
import React, {useState, useEffect} from 'react'
import Sidebar from "./Sidebar.jsx";
import {NavLinks} from "../constants/navLinks.js";
import {motion, AnimatePresence } from "framer-motion";
const NavBar = () => {
    const [open, setOpen] =useState(false);
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const sections = Object.values(NavLinks).map((link) =>
            document.querySelector(link.url)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((sec) => sec && observer.observe(sec));
        return () => observer.disconnect();
    }, []);
    return (
        <header className="fixed left-0 right-0 h-16  border-b border-brand-dark z-50 bg-dark-gray">
            <nav className="flex justify-between items-center h-full p-4">
                <h1 className="font-bold text-white decoration-brand-dark underline underline-offset-8 decoration-2">
                    <span className="text-brand-dark">S</span>hmuye.
                </h1>


                <ul className="hidden md:flex gap-8 justify-end">
                    {Object.values(NavLinks).map((link, index) => (
                        <li key={index}>
                            <a
                                className={`text-body ${
                                    active === link.name && "underline decoration-brand-dark underline-offset-8"
                                } text-brand hover:text-brand-dark`}
                                href={link.url}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>


                <button
                    className="md:hidden z-50"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X  className="cursor-pointer font-bold" color="#007079" size={24} />
                    ) : (
                        <MenuIcon className="cursor-pointer font-bold" color="#007079" size={24} />
                    )}
                </button>

                <AnimatePresence>
                    {open && <Sidebar setOpen={setOpen} active={active} />}
                </AnimatePresence>
            </nav>
        </header>
    )
}
export default NavBar
