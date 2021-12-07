import React, { useState } from 'react'
import Card from '../components/Cards/Card'
import ImageIcon from '@mui/icons-material/Image';
import "../styles/Homes.sass"
import { Button, Input } from '@mui/material';
const Rooms = () => {

    const [addRoomModal, setAddRoomModal] = useState(false)

    return (
        <>
            <h1>Rooms</h1>

            <div className="actions">
                <div>
                    <Button onClick={() => setAddRoomModal(true)}>
                        <ImageIcon />
                        <span>Добавить комнату</span>
                    </Button>
                </div>
                <div>
                    <Button>
                        <ImageIcon />
                    </Button>
                </div>
            </div>

            <div className="rooms">
                <Card>
                    <div className="card-icon">
                        <ImageIcon />
                    </div>
                    <div className="card-title">
                        Title
                    </div>
                    <div className="card-description">
                        Description
                    </div>
                </Card>
                <Card>
                    <div className="card-icon">
                        <ImageIcon />
                    </div>
                    <div className="card-title">
                        Title
                    </div>
                    <div className="card-description">
                        Description
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Rooms