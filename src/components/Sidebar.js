import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import WemaLogo from '../assets/images/wema-logo.svg';
import { navItems } from '../static/navItems';
import { WrapperCircle } from './base/globalstyle.styled';
import ProfileImage from '../assets/images/profileImage.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Sidebar = props => {
    const { sidebarRef, isOpen, closeDrawer } = props;
    const [activeIcon, setActiveIcon] = useState(navItems[0].title);
    const history = useHistory();

    const getRightLink = item => {
        setActiveIcon(item.title);
        history.push(item.route);
    };

    return (
        <aside className={`aside ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
            <div onClick={closeDrawer} className="closedrawer" data-aos="fade-left" data-aos-delay="1500">
                <AiFillCloseCircle />
            </div>
            <LogoContainer>
                <Logo>
                    <img src={WemaLogo} alt="logo" />
                    {/* <Image src={CoinbaseLogo} alt="logo" /> */}
                </Logo>
            </LogoContainer>
            <NavItemsContainer>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        onClick={() => getRightLink(item)}
                        style={{
                            background: item.title === activeIcon && 'rgba(255, 255, 255, 0.1)',
                            borderRight: item.title === activeIcon && '4px solid #fff',
                        }}
                    >
                        <div className="t-flex t-items-center">
                            <NavIcon>{item.icon}</NavIcon>
                            <NavTitle>{item.title}</NavTitle>
                        </div>
                        {item.children.length > 0 && (
                            <SideIcon>
                                <HiOutlineChevronDown />
                            </SideIcon>
                        )}
                    </NavItem>
                ))}
                <LoginUserHolder>
                    <WrapperCircle>
                        <img src={ProfileImage} alt="profile" />
                    </WrapperCircle>
                    <LoginUser>
                        <h3 className="t-text-white t-font-extrabold t-text-xl">Nafisa Sh.</h3>
                        <span>Support manager</span>
                    </LoginUser>
                </LoginUserHolder>
            </NavItemsContainer>
        </aside>
    );
};

export default Sidebar;

const LogoContainer = styled.div`
    padding: 1.5rem 0;
`;

const NavItemsContainer = styled.div`
    margin-top: 2rem;
    position: relative;
    &:hover {
        cursor: pointer;
    }
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    transition: ease all 0.5s;
    height: 3.4rem;
    color: #fff;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-right: 4px solid #fff;
    }
`;

const NavIcon = styled.div`
    background-color: transparent;
    padding: 0.7rem;
    border-radius: 50%;
    margin: 0.1rem;
    display: grid;
    place-items: center;
`;

const SideIcon = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.6);
    svg {
        font-size: 14px;
        fill: #fff;
        stroke: #fff;
    }
`;

const NavTitle = styled.div``;

const Logo = styled.div`
    width: 44%;
    object-fit: contain;
    margin-left: 1.5rem;
    margin: auto;
`;

const LoginUserHolder = styled.div`
    position: absolute;
    bottom: -20rem;
    padding: 10px 5px;
    display: flex;
    transition: ease all 0.5s;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

const LoginUser = styled.div`
    margin-right: 14px;
    span {
        color: rgba(255, 255, 255, 0.5);
    }
`;
