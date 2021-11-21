import React from 'react'
import "./Input.sass"

const Input = (props) => {
    return (
        <>
            <input {...props} type={props.type || "text"} className="input" placeholder={props.placeholder} />
        </>
    )
}

export default Input