import React from 'react'
import { lms ,EHM, youtube, Research } from '../assets'
import Project from "../components/Project.jsx";
const projects = [
    {
     name: 'Library Management System',
     description: "A Full stack Library Management System",
     githubUri: "https://github.com/shmuye/Library-Management-System",
     imageUri: lms
    },
    {
     name: 'Research Collaboration App',
     description: "A Full stack Research Collaboration App",
     githubUri: "https://github.com/shmuye/Research-Collaboration-App",
     imageUri: Research
    },
    {
     name: 'Youtube Clone',
     description: "Youtube clone using React and rapid api",
     githubUri: "https://github.com/shmuye/youtube-clone",
     imageUri: youtube
    },
    {
     name: 'Employee Hierarchy Manager',
     description: "A full stack Employee Hierarchy Manager",
     githubUri: "https://github.com/shmuye/Emloyee-Hierarchy-Manager",
     imageUri: EHM
    },
]


const Projects = () => {
return (
        <section
            id="projects"
            className="w-full min-h-screen text-center bg-light-gray text-subheading font-bold p-4"
        >
            <h2 className="text-subheading text-center">Projects</h2>
            <div className="w-full flex flex-col md:flex-row md:flex-wrap min-h-screen gap-4" >
                {
                    projects.map((project, index) => (
                    <Project key={index} {...project} />
                    ))
                }
            </div>
        </section>
    )
}
export default Projects
