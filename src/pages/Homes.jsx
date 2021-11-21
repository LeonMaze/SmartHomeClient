import React, { useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

import "../styles/Homes.sass"
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { useHistory } from 'react-router';
import { useFetchHomesQuery } from '../store/services/HomeService';
import HomeCard from '../components/Cards/HomeCard/HomeCard';
import AddHomeModal from '../components/Modals/AddHomeModal/AddHomeModal';

const Home = () => {

    const history = useHistory();
    const [addHomeModal, setAddHomeModal] = useState(false)
    const { data: homes = [], isLoading, isError } = useFetchHomesQuery();

    return (
        <>
            <h1>Homes</h1>

            <div className="actions">
                <div>
                    <Button onClick={() => setAddHomeModal(true)}>
                        <BsIcons.BsPlus size="22" />
                        <span>Добавить дом</span>
                    </Button>
                </div>
                <div>
                    <Input placeholder="Поиск..." />
                </div>
            </div>

            <div className="rooms">
                {homes.map(home =>
                    <HomeCard
                        key={home.id}
                        home={{...home,decription: "decription", image: <MdIcons.MdOutlineChair size="200" />}}
                        onClick={() => history.push(`/homes/${home.id}`)}/>
                )}
            </div>

            <AddHomeModal visible={addHomeModal} setVisible={setAddHomeModal}/>
        </>
    )
}

export default Home