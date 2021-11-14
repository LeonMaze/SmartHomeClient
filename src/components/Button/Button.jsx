import React from 'react'
import "./Button.sass"

const Button = (props) => {
    return (
        <>
            <button {...props} className="button">
                {props.children}
            </button>
        </>
    )
}

export default Button