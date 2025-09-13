import React from 'react'

const Service = ({icon, title, description}) => {
    return (
        <div className="flex flex-col items-center hover:shadow-sm shadow-brand-dark justify-start  rounded-2xl  gap-2 p-2 w-full md:w-1/3">
            <button>{icon}</button>
            <h3 className="title">{title}</h3>
            <p className="pElement">{description}</p>
        </div>
    )
}
export default Service
