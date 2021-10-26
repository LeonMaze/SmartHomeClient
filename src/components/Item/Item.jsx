import React from 'react'
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";

import "./Item.sass";

function Item() {
    return (
        <div className="item">
            <div className="item-item">
                <span className="item-icon">
                    <MdIcons.MdOutlineChair size="60" />
                </span>
                <span className="item-title"> Office</span>
                <div className="item-datacontainer">
                    <span className="item-tempdata">
                        3
                    </span>
                    <span className="item-title"> x Devices</span>
                </div>
            </div>

            <div className="item-item">
                <div className="item-datacontainer">
                    <span className="item-tempdata">
                        28 &deg;C <AiIcons.AiOutlineArrowUp />
                    </span>
                </div>
                <span className="item-title">Temperature</span>
            </div>

            <NavLink to="/light" className="item-item">
                <div className="item-datacontainer">
                    <span className="item-tempdata">
                        28 &deg;C <AiIcons.AiOutlineArrowUp />
                    </span>
                </div>
                <span className="item-title">Light illumination</span>
            </NavLink>


        </div>
    )
}

export default Item
