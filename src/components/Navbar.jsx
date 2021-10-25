import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarNames } from './NavbarNames';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>



            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {NavbarNames.map((i, idx) => {
                        return (
                            <li key={idx} className={i.classnme}>
                                <Link to={i.path}>
                                    {i.icon}
                                    <span> {i.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar


