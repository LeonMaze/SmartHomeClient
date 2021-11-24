import { Button, Input } from '@mui/material'
import React, {useState} from 'react'
import { useCreateHomeMutation } from '../../../store/services/HomeService'
import Modal from '../Modal'


const AddHomeModal = ({visible, setVisible}) => {

    const [home, setHome] = useState({name: ""})

    const [createHome] = useCreateHomeMutation();

    const AddHome = () => {
        createHome(home)
        setVisible(false)
    }

    return (
        <>
            <Modal
                visible={visible}
                setVisible={setVisible}
                title="Добавить дом">

                <div>Название дома:</div>
                <Input 
                    value={home.name} 
                    placeholder="Введите название" 
                    onChange={(e) => setHome({...home, name: e.target.value})} />

                <div className="modal-actions">
                    <Button onClick={() => setVisible(false)}>
                        Отменить
                    </Button>
                    <Button onClick={AddHome}>
                        Добавить
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default AddHomeModal