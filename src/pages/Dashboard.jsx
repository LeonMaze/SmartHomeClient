import React from 'react'
import Card from '../components/Cards/Card'
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import * as AiIcons from 'react-icons/ai';

import "../styles/Dashboard.sass"
import ControlCard from '../widgets/ControlCard/ControlCard';

const Dashboard = () => {

    return (
        <div className="layout">
            <div className="left-block">
                <Card className="welcome-card">
                    <h1>Welcome to Smarthome!</h1>
                </Card>

                <div className="controls card-horizontal-layout">
                    <ControlCard
                        switchId="c1"
                        title="Light"
                        icon={<AiIcons.AiOutlineHome size="64" color="#000" />} />
                    <ControlCard
                        isSelected = {true}
                        switchId="c2"
                        title="Light"
                        icon={<AiIcons.AiOutlineHome size="64" color="#000" />} />
                    <ControlCard
                        switchId="c3"
                        title="Light"
                        icon={<AiIcons.AiOutlineHome size="64" color="#000" />} />
                    <ControlCard
                        switchId="c4"
                        title="Light"
                        icon={<AiIcons.AiOutlineHome size="64" color="#000" />} />
                </div>

                <Card>
                    <h1>Температура</h1>
                </Card>
            </div>
            <div className="right-block card-vertical-layout">
                <SwitchWidget
                    switchId="right-block1"
                    title="My Widget"
                    description="It's working!!!" />
                <SwitchWidget
                    switchId="right-block2"
                    title="My Widget"
                    description="It's working!!!" />
                <SwitchWidget
                    switchId="right-block3"
                    title="My Widget"
                    description="It's working!!!" />
            </div>
        </div>
    )
}

export default Dashboard