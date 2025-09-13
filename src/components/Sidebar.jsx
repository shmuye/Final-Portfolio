import React from "react";
import { NavLinks } from "../constants/navLinks.js";

const Sidebar = ({ setOpen, active }) => {
    return (
        <section
            className="bg-dark-gray md:hidden absolute right-0 top-16 w-full p-4 shadow-sm"
            id="sidebar">
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
        </section>
    );
};

export default Sidebar;
