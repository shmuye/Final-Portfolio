import { MenuIcon, X } from "lucide-react";
import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar.jsx";
import { NavLinks } from "../constants/navLinks.js";
import { AnimatePresence } from "framer-motion";
import { DarkModeToggle } from "./DarkModeToggle.jsx";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");
  
    useEffect(() => {
        const sections = Object.values(NavLinks).map((link) =>
            document.querySelector(link.url)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        setActive(id.charAt(0).toUpperCase() + id.slice(1));
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((sec) => sec && observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className="fixed inset-x-0 z-[1000]"
        >
            <nav className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-sm z-10">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold dark:text-white text-lg underline underline-offset-8 decoration-2 decoration-brand-dark">
                        <span className="text-brand">S</span>hmuye.
                    </h1>
                    <DarkModeToggle />
                </div>

                <ul className="hidden md:flex gap-8">
                    {Object.values(NavLinks).map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                className={`text-body transition-colors ${
                                    active === link.name
                                        ? "underline decoration-brand-dark underline-offset-8 dark:text-white"
                                        : "text-brand hover:text-brand-dark dark:hover:text-white"
                                }`}
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
                        <X size={24} className="cursor-pointer text-brand" />
                    ) : (
                        <MenuIcon size={24} className="cursor-pointer text-brand" />
                    )}
                </button>

                <AnimatePresence>
                    {open && <Sidebar setOpen={setOpen} active={active} />}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default NavBar;
