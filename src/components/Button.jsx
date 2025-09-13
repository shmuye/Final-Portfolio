import React from 'react'

const Button = ({ width, text }) => {
    return (
        <button
            className={`w-${width} btn`}>
            {text}
        </button>
    )
}
export default Button
