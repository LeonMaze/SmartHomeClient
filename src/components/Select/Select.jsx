import React from 'react'

import "./Select.sass"

const Select = ({data}) => {

    return (
        <>
            <select>
                {data.map(item => 
                    <option value={item.value}> {item.label} </option>
                )}
            </select>
        </>
    )
}

export default Select