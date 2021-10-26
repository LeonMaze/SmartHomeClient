import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import VerticalSwitch from '../../components/Switch/VerticalSwitch'
import * as AiIcons from 'react-icons/ai';

import "./SwitchWidget.sass"

const SwitchWidget = ({ title, description, toggle }) => {

    const [isOn, setIsOn] = useState(true);

    const handleToggle = () =>{
        setIsOn(!isOn)
        toggle()
    } 

    return (
        <div className="widget-switch">
            <Card>
                <div className="widget-container">
                    <div>
                        <div className="widget-icon">
                            <AiIcons.AiOutlineHome size="32" color="#fff" />
                        </div>
                        <div className="widget-title">
                            {title}
                        </div>
                        <div className="widget-description">
                            {description}
                        </div>
                    </div>
                    <VerticalSwitch
                        isOn={isOn}
                        onColor="#6DF9BE"
                        handleToggle={handleToggle}
                    />
                </div>
            </Card>
        </div>
    )
}

export default SwitchWidget