import React from 'react'
import Card from '../../components/Cards/Card'
import SwitchCheckbox from '../../components/Switch/SwitchCheckbox'

import "./ControlCard.sass"

const ControlCard = ({isToggle, onToggle, icon, title, switchId, isSelected, onClick}) => {
    
    return (
        <Card className={`control-card ${isSelected? "control-card--selected": ""}`} onClick={onClick}>
            <div className="flex flex-space-beetwen">
                <span>{isToggle? "ON" : "OFF"}</span>
                <SwitchCheckbox switchId={switchId} isToggle={isToggle} handleToggle={onToggle} />
            </div>
            <div>
                {icon}
            </div>
            <p>{title}</p>
        </Card>
    )
}

export default ControlCard