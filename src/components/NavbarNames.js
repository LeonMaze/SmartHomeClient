import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const NavbarNames = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaTachometerAlt/>,
        classnme: 'navnames-text'
    },
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiOutlineHome/>,
        classnme: 'navnames-text'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <IoIcons.IoIosStats/>,
        classnme: 'navnames-text'
    }
]