import React, { useState } from 'react'

import "../styles/Homes.sass"
import { useHistory } from 'react-router';
import { useFetchHomesQuery } from '../store/services/HomeService';
import HomeCard from '../components/Cards/HomeCard/HomeCard';
import AddHomeModal from '../components/Modals/AddHomeModal/AddHomeModal';

import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import { Button, Input, Stack, Typography } from '@mui/material';

const Home = () => {

    const history = useHistory();
    const [addHomeModal, setAddHomeModal] = useState(false)
    const { data: homes = [], isLoading, isError } = useFetchHomesQuery();

    return (
        <>
            <h1>Homes</h1>

            <Stack direction="row" justifyContent="space-between">
                <Input placeholder="Поиск..." />
                <Button variant="outlined" onClick={() => setAddHomeModal(true)}>
                    <AddIcon />
                    <Typography>Добавить дом</Typography>
                </Button>
            </Stack>

            <div className="rooms">
                {homes.map(home =>
                    <HomeCard
                        key={home.id}
                        home={{ ...home, decription: "decription", image: <ImageIcon sx={{ fontSize: 250 }} /> }}
                        onClick={() => history.push(`/homes/${home.id}`)} />
                )}
            </div>

            <AddHomeModal open={addHomeModal} setOpen={setAddHomeModal} />
        </>
    )
}

export default Home