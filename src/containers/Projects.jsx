import React from 'react'
import { lms ,EHM, youtube, Research } from '../assets'
import Project from "../components/Project.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
const projects = [
    {
     name: 'Library Management System',
     description: "A Full stack Library Management System build using Express backend and React frontend and mongodb database.",
     githubUri: "https://github.com/shmuye/Library-Management-System",
     imageUri: lms
    },
    {
     name: 'Research Collaboration App',
     description: "A Full stack Research Collaboration Android app built using NestJS for the backend and" +
         "Jetpack compose for UI and postgres database.",
     githubUri: "https://github.com/shmuye/Research-Collaboration-App",
     imageUri: Research
    },
    {
     name: 'Youtube Clone',
     description: "Youtube clone application using React and data from rapid api.",
     githubUri: "https://github.com/shmuye/youtube-clone",
        siteUri: 'https://google.com/',
     imageUri: youtube,
    },
    {
     name: 'Employee Hierarchy Manager',
     description: "A full stack Employee Hierarchy Manager using NextJs for fronend and HonoJs Backend and postgres" +
         "for database.",
     githubUri: "https://github.com/shmuye/Emloyee-Hierarchy-Manager",
     imageUri: EHM
    }

]


const Projects = () => {
return (
        <section
            id="projects"
            className="section bg-light-gray"
        >
            <SectionHeading content="Projects" />
            <div className=" w-full flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-4" >
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
