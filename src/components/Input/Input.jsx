import React from 'react'
import "./Input.sass"

const Input = ({type, placeholder}) => {
    return (
        <>
            <input type={type || "text"} className="input" placeholder={placeholder} />
        </>
    )
}

export default Input