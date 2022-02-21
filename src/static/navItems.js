import {
    AiOutlinePieChart,
    AiOutlinePlusCircle,
    AiOutlineGift,
  } from 'react-icons/ai'
  import { BiTrendingUp } from 'react-icons/bi'
  import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
  import { MdWeb } from 'react-icons/md'
  import { FiSettings } from 'react-icons/fi'
  
  export const navItems = [
    {
      title: 'Dashboard',
      icon: <AiOutlinePieChart />,
    },
    {
      title: 'Requests',
      icon: <BiTrendingUp />,
    },
    {
      title: 'KYCs',
      icon: <RiCoinsLine />,
    },
    {
      title: 'Reports',
      icon: <MdWeb />,
    },
    {
      title: 'Audit Trail',
      icon: <AiOutlinePlusCircle />,
    },
    {
      title: 'Users',
      icon: <RiNotification3Line />,
    },
    {
      title: 'Settings',
      icon: <FiSettings />,
    },
  ]
  