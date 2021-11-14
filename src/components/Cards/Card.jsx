import React from 'react'
import "./Card.sass"

const Card = (props) => {
    return (
        <div {...props} className={`card ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default Card