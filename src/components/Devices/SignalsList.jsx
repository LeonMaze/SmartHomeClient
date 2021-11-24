import React from 'react'
import Loader from '../Loader/Loader';

import SignalItem from './SignalItem';
import {useFetchNewDevicesQuery} from '../../store/services/DeviceService'
import { useHistory } from 'react-router';

const NewDevicesList = () => {

    const { data = [], isLoading, isError } = useFetchNewDevicesQuery("", {
        pollingInterval: 1000
    });

    const history = useHistory()

    return (
        <>
            <h2>Новые устройства</h2>
            {(isLoading || isError) && <Loader />}
            {!isError &&
                data.map((signal) =>
                    <SignalItem
                        key={signal.id}
                        signal = {signal}
                        onClick={() => history.push(`/devices/${signal.input.identifier}`)}
                    />
                )
            }
        </>
    )
}

export default NewDevicesList