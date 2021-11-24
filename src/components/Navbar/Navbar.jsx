import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { NavbarNames } from './NavbarNames';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
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
                        ?<MenuOpenIcon onClick={close}/>
                        :<MenuIcon onClick={show} /> }
                </div>

                <nav className="navbar-items">
                    <ul>
                        {NavbarNames.map((i, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink to={i.path} className="navbar-item">
                                        <div className={i.classname}>
                                            {i.icon}
                                        </div>
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


