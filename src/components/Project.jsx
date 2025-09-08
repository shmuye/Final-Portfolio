import React from 'react'

const Project = ({githubUri, imageUri, name, description}) => {
    return (
        <div>
            <a href={githubUri} className="flex flex-col gap-2 w-full">
                <img src={imageUri} alt={name} className="w-full h-[50%]"  />
                <h1>{name}</h1>
                <p>{description}</p>
            </a>
        </div>
    )
}
export default Project
