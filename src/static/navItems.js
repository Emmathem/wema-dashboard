import { AiOutlinePlusCircle } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi';
import { RiCoinsLine } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';

export const navItems = [
    {
        title: 'Dashboard',
        route: '/',
        icon: <HiHome />,
        children: [],
    },
    {
        title: 'Requests',
        route: '/requests',
        icon: <BsFillChatLeftDotsFill />,
        children: [],
    },
    {
        title: 'KYCs',
        route: '/kycs',
        icon: <RiCoinsLine />,
        children: [],
    },
    {
        title: 'Reports',
        route: '/reports',
        icon: <MdWeb />,
        children: [],
    },
    {
        title: 'Audit Trail',
        route: '/audit-trail',
        icon: <AiOutlinePlusCircle />,
        children: [],
    },
    {
        title: 'Users',
        route: '/users',
        icon: <FaUsers />,
        children: [],
    },
    {
        title: 'Settings',
        report: '/settings',
        icon: <FiSettings />,
        children: [],
    },
];
