import React from 'react'

const Skill = ({icon, name}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div>{icon}</div>
            <p>{name}</p>
        </div>
    )
}
export default Skill
