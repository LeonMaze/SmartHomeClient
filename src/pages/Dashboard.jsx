import React from 'react'
import SwitchWidget from '../widgets/Switch/SwitchWidget'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="widgets-block">
                <SwitchWidget
                    title="My Widget"
                    description="It's working!!!"/>
            </div>
        </div>
    )
}

export default Dashboard