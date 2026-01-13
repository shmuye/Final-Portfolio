import React from "react";
import { motion } from "framer-motion";
import { NavLinks } from "../constants/navLinks.js";

const Sidebar = ({ setOpen, active }) => {
    return (
        <motion.section
            id="sidebar"
            className="fixed top-16 right-0 w-full p-6 bg-white dark:bg-slate-900 md:hidden shadow-md z-40"
            initial={{ x: "100%"}}
            animate={{ x: 0,}}
            exit={{ x: "100%"}}
            transition={{ type: "tween", duration: 0.4 }}
        >
            <nav>
                <ul className="flex flex-col items-center gap-2">
                    {Object.values(NavLinks).map((link) => (
                        <li className="my-2" key={link.name}>
                            <a
                                href={link.url}
                                onClick={() => setOpen(false)}
                                className={`text-body transition-colors ${
                                    active === link.name
                                        ? "underline decoration-brand-dark underline-offset-8 dark:text-white"
                                        : "text-brand-dark dark:text-brand hover:text-brand-dark dark:hover:text-white"
                                }`}

                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.section>
    );
};

export default Sidebar;
