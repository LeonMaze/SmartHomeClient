import React from 'react'

import "../styles/Devices.sass"
import NewDevicesList from '../components/Devices/NewDevicesList';
import DevicesList from '../components/Devices/DevicesList';



const Devices = () => {

    
    return (
        <div>
            <h1>Devices</h1>
            <NewDevicesList/>            
            <DevicesList/>
        </div>
    )
}

export default Devices