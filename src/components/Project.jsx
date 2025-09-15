import React from 'react';
import { useState } from 'react';
import { Github } from 'lucide-react'


const Project = ({siteUri, githubUri, imageUri, name, description }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="rounded-2xl shadow-sm bg-white  w-full min-h-[400px]  md:w-[30%] relative"
        >
            <a href={githubUri} className="flex flex-col" target="_blank" rel="noreferrer">
                <img src={imageUri} alt={name} className="w-full rounded-t-2xl h-[200px]" />
                <h3 className="title p-2">{name}</h3>
                <p className="pElement text-dark-gray pt-2 pb-4 px-2">{description}</p>
            </a>
            {hover && (
                <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-brand-dark opacity-75 flex flex-col justify-center items-center gap-2">
                    <a href={githubUri} className="text-white" target="_blank" rel="noreferrer">
                        <Github size={48} />
                    </a>
                    {
                        siteUri &&
                        <a
                            className="text-white font-bold"
                            href={siteUri}>
                            View Site
                        </a>
                    }

                </div>
            )}
        </div>
    );
};

export default Project;