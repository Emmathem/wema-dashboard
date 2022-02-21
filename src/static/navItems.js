import {
    AiOutlinePieChart,
    AiOutlinePlusCircle,
    AiOutlineGift,
  } from 'react-icons/ai'
  // import { BiTrendingUp } from 'react-icons/bi'
  import { RiCoinsLine } from 'react-icons/ri'
  import { MdWeb } from 'react-icons/md'
  import { FiSettings } from 'react-icons/fi'
  import { FaUsers } from 'react-icons/fa'
  import { BsFillChatLeftDotsFill } from 'react-icons/bs';
  
  export const navItems = [
    {
      title: 'Dashboard',
      icon: <AiOutlinePieChart />,
      children: [],
    },
    {
      title: 'Requests',
      icon: <BsFillChatLeftDotsFill />,
      children: [],
    },
    {
      title: 'KYCs',
      icon: <RiCoinsLine />,
      children: [],
    },
    {
      title: 'Reports',
      icon: <MdWeb />,
      children: [],
    },
    {
      title: 'Audit Trail',
      icon: <AiOutlinePlusCircle />,
      children: [],
    },
    {
      title: 'Users',
      icon: <FaUsers />,
      children: [],
    },
    {
      title: 'Settings',
      icon: <FiSettings />,
      children: [],
    },
  ]
  