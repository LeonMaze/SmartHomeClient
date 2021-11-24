import React, { useState } from 'react'
import Card from '../components/Cards/Card'
import SwitchCheckbox from '../components/Switch/SwitchCheckbox'

import 'react-dropdown/style.css';

import "../styles/Device.sass"
import { useParams } from 'react-router'
import { useFetchDeviceQuery } from '../store/services/DeviceService'
import SignalsChart from '../components/Charts/SignalsChart'
import { FormControl, InputLabel, MenuItem, Select, Button, Stack, IconButton } from '@mui/material';

const Device = () => {

    const { identifier } = useParams()

    const device = useFetchDeviceQuery(identifier);

    const [isOn, setIsOn] = useState();
    const [name, setName] = useState("Новое устройство");
    const [home, setHome] = useState();
    const [room, setRoom] = useState();

    return (
        <div>

            <Stack direction="row" justifyContent="space-between">
                <IconButton>
                    
                </IconButton>
                <h1>Настройка устройства</h1>
            </Stack>

            <Card>
                <h2>Устройство</h2>
                <br />
                <Stack direction="row">
                    <div>
                        <div>Наименование устройства:</div>
                        <div>{device.name || 'Новое устройство'}</div>
                    </div>
                    <Button>Переименовать</Button>
                </Stack>
                <br />
                <div>Идентификатор:</div>
                <div>AR1:1A</div>
                <br />

                <FormControl fullWidth>
                    <InputLabel id="home-select-label">Home</InputLabel>
                    <Select
                        labelId="home-select-label"
                        value={home}
                        label="Home"
                        onChange={(e) => setHome(e.target.value)}
                    >
                        <MenuItem value={10}>Home 1</MenuItem>
                        <MenuItem value={20}>Home 2</MenuItem>
                        <MenuItem value={30}>Home 3</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
                <FormControl fullWidth>
                    <InputLabel id="room-select-label">Room</InputLabel>
                    <Select
                        labelId="room-select-label"
                        value={room}
                        label="Room"
                        onChange={(e) => setHome(e.target.value)}
                    >
                        <MenuItem value={10}>Room 1</MenuItem>
                        <MenuItem value={20}>Room 2</MenuItem>
                        <MenuItem value={30}>Room 3</MenuItem>
                    </Select>
                </FormControl>
            </Card>

            <Card>
                <h2>Управление</h2>
                <div className="flex flex-space-between">
                    <div className="flex-center">Включить/выключить</div>
                    <SwitchCheckbox
                        switchId="s1"
                        isToggle={isOn}
                        handleToggle={() => setIsOn(!isOn)}
                        onColor="#6DF9BE" />
                </div>

                <h3>График</h3>
                <div className="flex flex-space-between">
                    <SignalsChart identifier={identifier} />
                    <div className="flex-center-column tasks">
                        <Card>
                            Задача 1
                        </Card>
                        <Card>
                            Задача 1
                        </Card>
                        <Card>
                            Задача 1
                        </Card>
                        <Button>Добавить</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Device