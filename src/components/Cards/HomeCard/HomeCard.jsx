import React from 'react'
import Card from '../Card'

const HomeCard = ({onClick,home}) => {
    return (
        <>
            <Card onClick={onClick}>
                <div className="card-icon">
                    {home.image}
                </div>
                <div className="card-title">
                    {home.name}
                </div>
                <div className="card-description">
                    {home.description}
                </div>
            </Card>
        </>
    )
}

export default HomeCard