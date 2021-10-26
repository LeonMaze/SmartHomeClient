import React from 'react'

import "./VerticalSwitch.sass"

const VerticalSwitch = ({ isOn, handleToggle, onColor }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && onColor }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`}></span>
            </label>
        </>
    )
}

export default VerticalSwitch