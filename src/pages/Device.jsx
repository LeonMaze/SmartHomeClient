import React, { useState } from 'react'
import Card from '../components/Cards/Card'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import Select from '../components/Select/Select'
import SwitchCheckbox from '../components/Switch/SwitchCheckbox'

import 'react-dropdown/style.css';

import "../styles/Device.sass"

const Device = () => {
    const [isToggle1, setIsToggle1] = useState();

    return (
        <div>
            <h1>Device</h1>

            <div className="flex device">
                <Card>
                    <h2>Устройство</h2>
                    <div>Наименование устройства:</div>
                    <Input />

                    <div>Идентификатор:</div>
                    <div>AR1:1A</div>
                </Card>

                <Card>
                    <h2>Привязка</h2>
                    <div>Дом:</div>
                    <Select data={[{ value: 'home1', label: 'home 1' }, { value: 'home2', label: 'home 2' }]} />

                    <div>Комната:</div>
                    <Select data={[{ value: 'room1', label: 'room 1' }, { value: 'room2', label: 'room 2' }]} />
                </Card>
            </div>

            <Card>
                <h2>Управление</h2>
                <div className="flex flex-space-beetwen">
                    <div className="flex-center">Включить/выключить</div>
                    <SwitchCheckbox
                        switchId="s1"
                        isToggle={isToggle1}
                        handleToggle={() => setIsToggle1(!isToggle1)}
                        onColor="#6DF9BE" />
                </div>

                <div className="flex flex-space-beetwen">
                    <h3>График</h3>
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