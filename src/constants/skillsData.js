// skills.js (optional external file)
import {
    html, css, js, tailwind, react, figma, node, nest, express, postgres, mysql, mongo, python, flutter, git, typescript,
} from "../assets/index.js";

export const skillsData = {
    "Frontend": [
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
        { name: 'JavaScript', icon: js },
        { name: 'TypeScript', icon: typescript },
        { name: 'React', icon: react },
        { name: 'Tailwind CSS', icon: tailwind },
        { name: 'Figma', icon: figma },
    ],

    "Backend": [
        { name: 'Node.js', icon: node },
        { name: 'Express', icon: express },
        { name: 'NestJS', icon: nest },
    ],

    "Databases": [
        { name: 'PostgreSQL', icon: postgres },
        { name: 'MySQL', icon: mysql },
        { name: 'MongoDB', icon: mongo },
    ],

    "Programming Languages": [
        { name: 'Python', icon: python },
        { name: 'TypeScript', icon: typescript },
        { name: 'JavaScript', icon: js },
    ],

    "Tools": [
        { name: 'Git', icon: git },
        { name: 'Flutter', icon: flutter },
    ],
};
