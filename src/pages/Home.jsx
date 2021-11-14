import React, { useState } from 'react'
import Card from '../components/Cards/Card'
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

import "../styles/Home.sass"
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Modal from '../components/Modal/Modal';

const Home = () => {

    const [addRoomModal, setAddRoomModal] = useState(false)

    return (
        <>
            <h1>Home</h1>

            <div className="actions">
                <div>
                    <Button onClick={() => setAddRoomModal(true)}>
                        <BsIcons.BsPlus size="22" />
                        <span>Добавить комнату</span>
                    </Button>
                </div>
                <div>
                    <Button>
                        <BsIcons.BsPlus size="22" />
                    </Button>
                </div>
            </div>

            <div className="rooms">
                <Card>
                    <div className="card-icon">
                        <MdIcons.MdOutlineChair size="200" />
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
                        <MdIcons.MdOutlineChair size="200" />
                    </div>
                    <div className="card-title">
                        Title
                    </div>
                    <div className="card-description">
                        Description
                    </div>
                </Card>
            </div>

            <Modal 
                visible={addRoomModal} 
                setVisible={setAddRoomModal} 
                title="Добавить комнату">
                    
                    <Input placeholder="Введите название"/>

                    <div className="modal-actions">
                        <Button onClick={() => setAddRoomModal(false)}>
                            Отменить
                        </Button>
                        <Button>
                            Добавить
                        </Button>
                    </div>
            </Modal>
        </>
    )
}

export default Home