import React from "react";
import { motion } from "framer-motion";
import { NavLinks } from "../constants/navLinks.js";

const Sidebar = ({ setOpen, active }) => {
    return (
        <motion.section
            className="bg-dark-gray md:hidden fixed right-0 top-16 w-full p-4 shadow-sm z-40"
            id="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
        >
            <nav>
                <ul className="flex flex-col justify-start items-center">
                    {Object.values(NavLinks).map((link) => (
                        <li className="my-2" key={link.name}>
                            <a
                                onClick={() => setOpen(false)}
                                className={`text-body ${
                                    active === link.name
                                        ? "text-brand underline decoration-brand-dark underline-offset-8"
                                        : "text-brand hover:text-brand-dark"
                                }`}
                                href={link.url}
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
