import React from 'react'

import "../styles/Devices.sass"
import SignalsList from '../components/Devices/SignalsList';
import DevicesList from '../components/Devices/DevicesList';



const Devices = () => {

    
    return (
        <div>
            <h1>Devices</h1>
            <SignalsList/>            
            <DevicesList/>
        </div>
    )
}

export default Devices