import React, { useState } from 'react'
import Card from '../../components/Cards/Card'
import * as AiIcons from 'react-icons/ai';

import "./SwitchWidget.sass"
import SwitchCheckbox from '../../components/Switch/SwitchCheckbox';

const SwitchWidget = ({ title, description, toggle, switchId }) => {

    const [isToggle, setIsToggle] = useState(true);

    const handleToggle = () =>{
        setIsToggle(!isToggle)
        toggle?.()
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
                    <SwitchCheckbox
                        switchId={switchId}
                        orientation="vertical"
                        isToggle={isToggle}
                        onColor="#6DF9BE"
                        handleToggle={handleToggle}
                    />
                </div>
            </Card>
        </div>
    )
}

export default SwitchWidget