import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const NavbarNames = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaTachometerAlt size="32"/>,
        classnme: 'navbar-item'
    },
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiOutlineHome size="32"/>,
        classnme: 'navbar-item'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <IoIcons.IoIosStats size="32"/>,
        classnme: 'navbar-item'
    }
]