import React from 'react'
import ParametrCard from '../widgets/Info/ParametrCard'

import "../styles/Home.sass"
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import Card from '../components/Cards/Card'
import { useDeleteHomeMutation, useFetchHomeQuery } from '../store/services/HomeService'
import { useHistory, useParams } from 'react-router'
import { Button, IconButton, Stack } from '@mui/material'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Home = () => {

    const { id } = useParams();

    const history = useHistory();
    const { data: home, isLoading } = useFetchHomeQuery(id);
    const [deleteHome] = useDeleteHomeMutation();

    const DeleteHome = () => {
        deleteHome(id)
        history.push("/homes")
    }

    return (
        <div>
            <Stack direction="row" justifyContent="space-between">
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <IconButton onClick={()=> history.goBack()}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <h1>Home {!isLoading && home.name}</h1>
                </Stack>
                <Stack direction="row">
                    <Button >Изменить</Button>
                    <Button onClick={DeleteHome}>Удалить</Button>
                </Stack>
            </Stack>


            <div className="flex">
                <div className="content">
                    <Stack direction="row" justifyContent="space-between">
                        <h2>Показатели</h2>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </Stack>
                    <div className="card-layout flex">
                        <ParametrCard />
                        <ParametrCard />
                        <ParametrCard />
                    </div>

                    <Stack direction="row" justifyContent="space-between">
                        <h2>Комнаты</h2>
                        <Stack direction="row">
                            <Button>Добавить</Button>
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton>
                        </Stack>
                    </Stack>

                    <div className="card-layout flex">
                        <Card className="flex-center-column">
                            <div>
                                <ImageIcon />
                            </div>
                            <div>
                                Title
                            </div>
                        </Card>
                        <Card className="flex-center-column">
                            <div>
                                <ImageIcon />
                            </div>
                            <div>
                                Title
                            </div>
                        </Card>
                        <Card className="flex-center-column">
                            <div>
                                <ImageIcon />
                            </div>
                            <div>
                                Title
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="sidebar">
                    <h2>Устройства</h2>
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
                </div>
            </div>

        </div>
    )
}

export default Home