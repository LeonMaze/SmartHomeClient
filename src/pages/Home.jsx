import React from 'react'
import ParametrCard from '../widgets/Info/ParametrCard'

import "../styles/Home.sass"
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import Card from '../components/Cards/Card'
import { useDeleteHomeMutation, useFetchHomeQuery } from '../store/services/HomeService'
import { useHistory, useParams } from 'react-router'
import { Button, IconButton, Stack, Typography } from '@mui/material'

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
                    <IconButton onClick={() => history.goBack()}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <h1>Home </h1>
                </Stack>
                <Stack direction="row">
                    <Button >Изменить</Button>
                    <Button onClick={DeleteHome}>Удалить</Button>
                </Stack>
            </Stack>


            <Stack direction="row" spacing={2}>
                <Stack width={1} spacing={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography>Показатели</Typography>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <ParametrCard />
                        <ParametrCard />
                        <ParametrCard />
                    </Stack>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography>Комнаты</Typography>
                        <Stack direction="row">
                            <Button>Добавить</Button>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Card>
                            <Stack width={1} alignItems="center" spacing={2}>
                                <ImageIcon />
                                <Typography>Title</Typography>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack width={1} alignItems="center" spacing={2}>
                                <ImageIcon />
                                <Typography>Title</Typography>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack width={1} alignItems="center" spacing={2}>
                                <ImageIcon />
                                <Typography>Title</Typography>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
                <Stack spacing={2}>
                    <Typography>
                        Устройства
                    </Typography>

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

        </div>
    )
}

export default Home