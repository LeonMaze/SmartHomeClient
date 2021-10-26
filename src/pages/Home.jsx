import React from 'react'
import Card from '../components/Card/Card'
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

import "../styles/Home.sass"

const Home = () => {
    return (
        <>
            <h1>Home</h1>

            <div className="actions">
                <div>
                    <button><BsIcons.BsPlus size="22" /></button>
                </div>
                <div>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
                    <button><BsIcons.BsPlus size="22" /></button>
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
        </>
    )
}

export default Home