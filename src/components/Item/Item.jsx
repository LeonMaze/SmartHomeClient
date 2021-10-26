import React from 'react'
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

import "./Card.sass";

function Card() {
    return (
        <div className = "card">
            <div className = "card-item">
                <span className="card-icon">
                    <MdIcons.MdOutlineChair size="60"/>
                </span>
                <span className="card-title"> Office</span>
                <div className="card-datacontainer">
                    <span className="card-tempdata">
                        3 
                    </span>
                    <span className="card-title"> x Devices</span>    
                </div>
            </div>

            <div className = "card-item">
                <div className="card-datacontainer">
                    <span className="card-tempdata">
                        28 &deg;C <AiIcons.AiOutlineArrowUp />
                    </span>
                </div>
                <span className="card-title">Temperature</span>    
            </div>
                 
        </div>
    )
}

export default Card
