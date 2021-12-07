import React, { useState } from 'react'
import Card from '../components/Cards/Card'

import "../styles/Device.sass"
import { useParams } from 'react-router'
import { useFetchDeviceQuery } from '../store/services/DeviceService'
import { MenuItem, Button, Stack, IconButton, Switch, Menu, Divider, Typography } from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';
import DayChart from '../components/Charts/DayChart'

const Device = () => {

    const { identifier } = useParams()
    const device = useFetchDeviceQuery(identifier);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack spacing={3}>

            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                    <IconButton>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <Typography variant="h4">Настройка устройства</Typography>
                </Stack>
                <IconButton onClick={handleClick}>
                    <SettingsIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            width: "150px",
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        Reset
                    </MenuItem>
                    <MenuItem>
                        Delete
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        Close
                    </MenuItem>
                </Menu>
            </Stack>

            <Typography variant="h5">Устройство {identifier}</Typography>

            <Stack spacing={2}>
                <Card>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>Включить/Выключить:</Typography>
                        <Switch />
                    </Stack>
                </Card>

                <Card>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>Наименование:</Typography>
                        <Button variant="outlined">
                            Переимновать
                        </Button>
                    </Stack>
                </Card>

                <Card>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>Дом:</Typography>
                        <Button variant="outlined">
                            Изменить
                        </Button>
                    </Stack>
                </Card>

                <Card>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>Комната:</Typography>
                        <Button variant="outlined">
                            Изменить
                        </Button>
                    </Stack>
                </Card>
            </Stack>

            <Typography variant="h5">Управление</Typography>

            <Card>
                <Stack spacing={2}>
                    <Typography>График работы</Typography>
                    <DayChart />
                </Stack>
            </Card>

            <Stack direction="row" spacing={2} alignItem="stretch">

                <Card>
                    <Stack spacing={2}>
                        <Typography>Задачи: </Typography>
                        <Button variant="outlined" fullWidth>
                            Добавить задачу
                        </Button>
                    </Stack>
                </Card>
            </Stack>


        </Stack>
    )
}

export default Device