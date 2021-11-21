import React from 'react'
import ParametrCard from '../widgets/Info/ParametrCard'

import "../styles/Home.sass"
import SwitchWidget from '../widgets/Switch/SwitchWidget'
import Card from '../components/Cards/Card'
import * as MdIcons from 'react-icons/md';
import { useDeleteHomeMutation, useFetchHomeQuery } from '../store/services/HomeService'
import { useHistory, useParams } from 'react-router'
import Button from '../components/Button/Button'

const Home = () => {

    const {id} = useParams();

    const history = useHistory();
    const {data: home, isLoading} = useFetchHomeQuery(id);
    const [deleteHome] = useDeleteHomeMutation();

    const DeleteHome = () => {
        deleteHome(id)
        history.push("/homes")
    }

    return (
        <div>
            <div className="flex flex-space-beetwen">
                <h1>Home {!isLoading && home.name}</h1>
                <div className="flex">
                <Button >Изменить</Button>
                <Button onClick={DeleteHome}>Удалить</Button>
                </div>
            </div>
            

            <div className="flex">
                <div className="content">
                    <h2>Показатели</h2>
                    <div className="card-layout flex">
                        <ParametrCard />
                        <ParametrCard />
                        <ParametrCard />
                    </div>

                    <h2>Комнаты</h2>

                    <div className="card-layout flex">
                        <Card className="flex-center-column">
                            <div>
                                <MdIcons.MdOutlineChair size="64" />
                            </div>
                            <div>
                                Title
                            </div>
                        </Card>
                        <Card className="flex-center-column">
                            <div>
                                <MdIcons.MdOutlineChair size="64" />
                            </div>
                            <div>
                                Title
                            </div>
                        </Card>
                        <Card className="flex-center-column">
                            <div>
                                <MdIcons.MdOutlineChair size="64" />
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