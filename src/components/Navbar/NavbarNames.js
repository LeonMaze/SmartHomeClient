
import MemoryIcon from '@mui/icons-material/Memory';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const NavbarNames = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon sx={{ fontSize: 35, color: '#ffff'}}/>,
        classname: 'icon blue'
    },
    {
        title: 'Homes',
        path: '/homes',
        icon: <HomeIcon sx={{ fontSize: 35, color: '#ffff'}}/>,
        classname: 'icon red'
    },
    {
        title: 'Rooms',
        path: '/rooms',
        icon: <HomeIcon sx={{ fontSize: 35, color: '#ffff' }}/>,
        classname: 'icon red'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <LeaderboardIcon sx={{ fontSize: 35, color: '#ffff' }}/>,
        classname: 'icon green'
    },
    {
        title: 'Devices',
        path: '/devices',
        icon: <MemoryIcon sx={{ fontSize: 35, color: '#ffff' }}/>,
        classname: 'icon green'
    }
]