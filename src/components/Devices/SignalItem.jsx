import React from 'react'
import MemoryIcon from '@mui/icons-material/Memory';

import "./Devices.sass"

const DeviceItem = ({ signal, onClick }) => {

    return (
        <>
            <div onClick={onClick} className="flex flex-space-between device-item">
                <div>
                    <MemoryIcon sx={{ fontSize: 50 }}/>
                </div>
                <div>
                    <p>Arduino:</p>
                    <p>{signal.input.arduino}</p>
                </div>
                <div>
                    <p>Pin:</p>
                    <p>{signal.input.pin}</p>
                </div>
                <div>
                    <p>Description:</p>
                    <p>{signal.input.decription}</p>
                </div>
                <div>
                    <p>State:</p>
                    <p>{signal.state}</p>
                </div>
            </div>
        </>
    )
}

export default DeviceItem