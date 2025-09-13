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
} from "../assets/index.js";
import Skill from "../components/Skill.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

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
]

const Skills = () => {
    return (
        <section
            id="skills"
            className="section bg-light-gray "
        >
            <SectionHeading content="Skills" />
            <div className="grid grid-cols-3 md:grid-cols-4 justify-items-center ">
                {
                    skills.map((skill, index) => (
                        <Skill key={index} {...skill} />
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
