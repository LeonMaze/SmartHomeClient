import React from 'react'

import "./SwitchCheckbox.sass"

const SwitchCheckbox = ({ isToggle, handleToggle, onColor, switchId, orientation }) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className="flex flex-center">
            <input
                checked={isToggle}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-${switchId}`}
                type="checkbox"
            />
            <label
                style={{ background: isToggle && onColor }}
                className={`react-switch-label label-${orientation || "horizontal"}`}
                htmlFor={`react-switch-${switchId}`}
            >
                <span className={`react-switch-button button-${orientation || "horizontal"}`}></span>
            </label>
        </div>
    )
}

export default SwitchCheckbox