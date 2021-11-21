import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const NavbarNames = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaTachometerAlt size="32" color="#fff"/>,
        classname: 'icon blue'
    },
    {
        title: 'Homes',
        path: '/homes',
        icon: <AiIcons.AiOutlineHome size="32" color="#fff"/>,
        classname: 'icon red'
    },
    {
        title: 'Rooms',
        path: '/rooms',
        icon: <AiIcons.AiOutlineHome size="32" color="#fff"/>,
        classname: 'icon red'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <IoIcons.IoIosStats size="32" color="#fff"/>,
        classname: 'icon green'
    },
    {
        title: 'Devices',
        path: '/devices',
        icon: <IoIcons.IoIosDesktop size="32" color="#fff"/>,
        classname: 'icon green'
    }
]