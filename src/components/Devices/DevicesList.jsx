import React from 'react'
import { useFetchDevicesQuery } from '../../store/services/DeviceService';
import Loader from '../Loader/Loader';
import DeviceItem from './SignalItem';

const DevicesList = () => {
    
    const { data = [], isLoading, isError } = useFetchDevicesQuery("", {
        pollingInterval: 1000
    });

    return (
        <>
            <h2>Настроеные устройства</h2>
            {(isLoading || isError) && <Loader />}
            {!isError &&
                <table>
                    {data.map((device) =>
                        <DeviceItem
                            key={device.id}
                            arduino={device.input.arduino}
                            pin={device.input.pin}
                            decription={device.input.decription}
                            state={device.state}
                        />
                    )}
                </table>
            }
        </>
    )
}

export default DevicesList