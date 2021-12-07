import React from 'react'
import Card from '../components/Cards/Card'
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import ImageIcon from '@mui/icons-material/Image';

import "../styles/Dashboard.sass"
import ControlCard from '../widgets/ControlCard/ControlCard';
import { FormControl, InputLabel, MenuItem, Select, Stack, Switch, Typography } from '@mui/material';
import { borderRadius, height } from '@mui/system';

const Dashboard = () => {

    return (

        <Stack direction="row" spacing={3}>
            <Stack spacing={2} width={1}>
                <Card className="welcome-card">
                    <Typography variant="h3">
                        Welcome to Smarthome!
                    </Typography>
                </Card>

                <Stack direction="row" spacing={2}>
                    <Stack justifyContent="center" width={1}>
                        <Card>
                            <Stack justifyContent="center" fullWidth>
                                <div className="round-border">
                                    <Typography fontSize="1em">
                                        15
                                    </Typography>
                                </div>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography>
                                    Light
                                </Typography>
                                <Switch />
                            </Stack>
                        </Card>
                    </Stack>
                    <ControlCard
                        title="Light"
                        icon={<ImageIcon />} />
                    <ControlCard
                        isSelected={true}
                        title="Light"
                        icon={<ImageIcon />} />
                    <ControlCard
                        title="Light"
                        icon={<ImageIcon />} />
                </Stack>

                <Card>
                    <Typography>Temperature</Typography>
                </Card>
            </Stack>
            <Stack spacing={2}>
                <SwitchWidget
                    switchId="right-block1"
                    title="My Widget"
                    description="It's working!!!" />
                <SwitchWidget
                    switchId="right-block2"
                    title="My Widget"
                    description="It's working!!!" />
                <SwitchWidget
                    switchId="right-block3"
                    title="My Widget"
                    description="It's working!!!" />
            </Stack>
        </Stack>
    )
}

export default Dashboard