import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarNames } from './NavbarNames';

import "./Navbar.sass"

function Navbar() {
    const [active, setActive] = useState(false);

    const show = () => setActive(true);
    const close = () => setActive(false);

    return (
        <>
            <div className={active ? 'navbar active' : 'navbar'}>
                <div className="navbar-header">
                    { active
                        ?<AiIcons.AiOutlineClose size="24" onClick={close}/>
                        :<FaIcons.FaBars size="24" onClick={show} /> }
                </div>

                <nav className="navbar-items">
                    <ul>
                        {NavbarNames.map((i, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink to={i.path} className={i.classnme}>
                                        {i.icon}
                                        {active && <span> {i.title} </span>}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar


