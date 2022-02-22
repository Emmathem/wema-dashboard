import { HiHome } from 'react-icons/hi';
import { RiCoinsLine } from 'react-icons/ri';
import { MdArticle } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BsFillChatLeftDotsFill, BsFillDashSquareFill } from 'react-icons/bs';

export const navItems = [
    {
        title: 'Dashboard',
        route: '/',
        icon: <HiHome />,
        children: [],
    },
    {
        title: 'Requests',
        route: '/',
        icon: <BsFillChatLeftDotsFill />,
        children: [],
    },
    {
        title: 'KYCs',
        route: '/',
        icon: <RiCoinsLine />,
        children: [],
    },
    {
        title: 'Reports',
        route: '/',
        icon: <MdArticle />,
        children: [],
    },
    {
        title: 'Audit Trail',
        route: '/',
        icon: <BsFillDashSquareFill />,
        children: [
            {
                title: 'Trail',
                route: '/',
                icon: '',
            },
        ],
    },
    {
        title: 'Users',
        route: '/',
        icon: <FaUsers />,
        children: [],
    },
    {
        title: 'Settings',
        report: '/',
        icon: <FiSettings />,
        children: [],
    },
];
