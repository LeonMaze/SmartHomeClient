import React from 'react'
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import Card from '../components/Item/Item'

const Dashboard = () => {
    return (
        <div className="page-wrapper">
            <h1>Dashboard</h1>
            <div className="widgets-block">
                <SwitchWidget
                    title="My Widget"
                    description="It's working!!!"/>
            </div>
            <Card />
        </div>
    )
}

export default Dashboard