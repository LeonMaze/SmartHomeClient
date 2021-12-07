import React from 'react'
import { Column } from '@ant-design/charts';

const DayChart = () => {

    const data = [
        {
            hour: '0:00',
            minutes: [0, 0],
        },
        {
            hour: '1:00',
            minutes: [0, 0],
        },
        {
            hour: '2:00',
            minutes: [0, 0],
        },
        {
            hour: '3:00',
            minutes: [0, 0],
        },
        {
            hour: '4:00',
            minutes: [0, 60],
        },
        {
            hour: '5:00',
            minutes: [0, 60],
        },
        {
            hour: '6:00',
            minutes: [0, 60],
        },
        {
            hour: '7:00',
            minutes: [0, 0],
        },
        {
            hour: '8:00',
            minutes: [0, 0],
        },
        {
            hour: '9:00',
            minutes: [0, 0],
        },
        {
            hour: '10:00',
            minutes: [0, 0],
        },
        {
            hour: '11:00',
            minutes: [30, 60],
        },
        {
            hour: '12:00',
            minutes: [0, 30],
        },
        {
            hour: '13:00',
            minutes: [0, 0],
        },
        {
            hour: '14:00',
            minutes: [0, 0],
        },
        {
            hour: '15:00',
            minutes: [0, 0],
        },
        {
            hour: '16:00',
            minutes: [0, 0],
        },
        {
            hour: '17:00',
            minutes: [15, 45],
        },
        {
            hour: '18:00',
            minutes: [0, 0],
        },
        {
            hour: '19:00',
            minutes: [0, 0],
        },
        {
            hour: '20:00',
            minutes: [0, 0],
        },
        {
            hour: '21:00',
            minutes: [0, 0],
        },
        {
            hour: '22:00',
            minutes: [0, 0],
        },
        {
            hour: '23:00',
            minutes: [0, 0],
        },
    ];

    const config = {
        data,
        xField: 'hour',
        yField: 'minutes',
        isRange: true
    };
    return <Column {...config} />;
}

export default DayChart