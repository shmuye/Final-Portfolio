import React from 'react'

const Service = ({icon, title, description}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-2 w-full md:w-1/3">
            <button>{icon}</button>
            <h1 className="text-xl font-bold text-">{title}</h1>
            <p className="text-body">{description}</p>
        </div>
    )
}
export default Service
