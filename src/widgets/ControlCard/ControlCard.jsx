import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import Card from '../../components/Cards/Card'

import "./ControlCard.sass"

const ControlCard = ({isToggle, onToggle, icon, title, isSelected, onClick}) => {
    
    return (
        <Card className={`control-card ${isSelected && "control-card--selected"}`} onClick={onClick}>
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    {isSelected 
                        ? <Typography>ON</Typography> 
                        : <Typography>OFF</Typography>}
                    <Switch value={isToggle} onChange={onToggle}/>
                </Stack>
                {icon}
                <Typography>{title}</Typography>          
            </Stack>
        </Card>
    )
}

export default ControlCard