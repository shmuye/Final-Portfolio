import React from 'react'
import {
    html,
    css,
    js,
    tailwind,
    react,
    figma,
    node,
    nest,
    express,
    postgres,
    mysql,
    mongo,
    python,
    flutter,
    git,
    typescript,
    supabase,
    next
} from "../assets/index.js";

import Skill from "../components/Skill.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { motion, useAnimation } from "framer-motion";

const skills = [
    {name: 'HTML', icon: html },
    {name: 'CSS', icon: css },
    {name: 'JavaScript', icon: js },
    {name: 'Tailwind', icon: tailwind },
    {name: 'React', icon: react },
    {name: 'Figma', icon: figma },
    {name: 'Node', icon: node },
    {name: 'Nest', icon: nest },
    {name: 'Express', icon: express },
    {name: 'Postgres', icon: postgres },
    {name: 'MySQL', icon: mysql },
    {name: 'MongoDB', icon: mongo },
    {name: 'Python', icon: python },
    {name: 'Flutter', icon: flutter },
    {name: 'Git', icon: git },
    {name: 'TypeScript', icon: typescript },
    {name: 'Supabase', icon: supabase},
    {name: 'NextJs', icon: next}
]

const Skills = () => {
  return (
        <section
            id="skills"
            className="section bg-light-gray dark:bg-slate-800 transition-colors duration-500"
        >
            <SectionHeading content="Skills" />
            <div className="w-full py-6 flex flex-wrap justify-center gap-4">
                {
                    skills.map((skill, index) => (
                        <div
                          key={index}>
                            <Skill {...skill} />
                    </div>
                    ))
                }
             
            </div>
        </section>
    )
}



export default Skills