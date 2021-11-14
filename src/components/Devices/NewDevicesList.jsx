import React from 'react'
import Loader from '../Loader/Loader';

import DeviceItem from './DeviceItem';
import {useFetchNewDevicesQuery} from '../../store/services/DeviceService'

const NewDevicesList = () => {

    const { data = [], isLoading, isError } = useFetchNewDevicesQuery("", {
        pollingInterval: 1000
    });

    return (
        <>
            <h2>Новые устройства</h2>
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

export default NewDevicesList