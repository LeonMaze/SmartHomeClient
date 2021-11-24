import React, { useState } from 'react'
import { Line } from '@ant-design/charts';
import { useFetchSignalsQuery } from '../../store/services/DeviceService';

import "./charts.sass"

const SignalsChart = ({ identifier }) => {

    const { data = [] } = useFetchSignalsQuery(identifier, {
        pollingInterval: 1000,
    })

    const config = {
        autoFit: true,
        data: data,
        padding: 'auto',
        xField: 'time',
        yField: 'state',
        xAxis: {
            tickCount: 10,
        },
        smooth: true,
    };

    return (
        <div className="chart-wrapper">
            <Line {...config} />
        </div>
    )
}

export default SignalsChart