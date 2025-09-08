import { HiMenu} from "react-icons/hi";
import {HiX} from "react-icons/hi";
import React, {useState} from 'react'
import Sidebar from "./Sidebar.jsx";
const NavLink = {
    Home: {name: 'Home', url: '#home'},
    About: {name: 'About', url: '#about'},
    Skill: {name: 'Skills', url: '#skills'},
    Services: {name: 'Services', url: '#services'},
    Projects: {name: 'Projects', url: '#projects'},
    Contact: {name: 'Contact', url: '#contact'},
    Blog: {name: 'Blog', url: '#'}

}
const NavBar = () => {
    const [open, setOpen] =useState(false);
    return (
        <header className="fixed left-0 right-0 h-16 border-b border-brand-dark z-50 bg-light-gray">
            <nav className="flex justify-between items-center h-full p-4">
                <h1 className="font-bold text-black  decoration-brand-dark underline underline-offset-8 decoration-2"><span className="text-brand-dark">S</span>hmuye</h1>
                <ul className="hidden md:flex justify-end">
                    {
                        Object.values(NavLink).map((link, index) => (
                            <li key={index} className="mx-4">
                                <a
                                    className="underline-offset-2 p-4 text-body text-brand-dark hover:text-brand"
                                    href={link.url}>{link.name}
                                </a>
                            </li>
            ))
                    }
                </ul>
                {
                    <button
                        className="md:hidden z-50"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <HiX color="#007079" size={24} /> : <HiMenu color="#007079" size={24} />}
                    </button>
                }
                {
                    open && <Sidebar setOpen={setOpen} />
                }

            </nav>
        </header>
    )
}
export default NavBar
