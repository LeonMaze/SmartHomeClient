import React from 'react'

import * as IoIcons from 'react-icons/io';

const DeviceItem = ({arduino, pin, decription, state, onClick}) => {
    return (
        <>
            <tr onClick={() => onClick}>
                <td>
                    <IoIcons.IoIosDesktop size="64" color="#000" />
                </td>
                <td>
                    <p>Arduino:</p>
                    <p>{arduino}</p>
                </td>
                <td>
                    <p>Pin:</p>
                    <p>{pin}</p>
                </td>
                <td>
                    <p>Description:</p>
                    <p>{decription}</p>
                </td>
                <td>
                    <p>State:</p>
                    <p>{state}</p>
                </td>
            </tr>
        </>
    )
}

export default DeviceItem