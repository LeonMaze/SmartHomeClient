import { Stack, Typography } from '@mui/material'
import React from 'react'
import Card from '../../components/Cards/Card'

const ParametrCard = () => {
    return (
        <Card>
            <Stack spacing={2} alignItems="center">
                <Typography fontSize={30}>15</Typography>
                <Typography>Title</Typography>
            </Stack>
        </Card>
    )
}

export default ParametrCard