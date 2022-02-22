// import Image from 'next/image';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import WemaLogo from '../assets/images/wema-logo.svg';
import { navItems } from '../static/navItems';
import { WrapperCircle } from './base/globalstyle.styled';
import ProfileImage from '../assets/images/profileImage.png'

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title);
    const history = useHistory();

    const getRigthLink = (item) => {
        setActiveIcon(item.title);
        history.push(item.route);
    }

    return (
        <Wrapper className='t-hidden lg:t-block transition'>
            <LogoContainer>
                <Logo>
                    <img src={WemaLogo} alt="logo" />
                    {/* <Image src={CoinbaseLogo} alt="logo" /> */}
                </Logo>
            </LogoContainer>
            <NavItemsContainer>
                {navItems.map((item, index) => (
                    <NavItem key={index} onClick={() => getRigthLink(item)} style={{ background: item.title === activeIcon && 'rgba(255, 255, 255, 0.1)', borderRight: item.title === activeIcon && '4px solid #fff' }}>
                        <NavIcon>
                            {item.icon}
                        </NavIcon>
                        <NavTitle>{item.title}</NavTitle>
                    </NavItem>
                ))}
                <LoginUserHolder>
                    <WrapperCircle>
                        <img src={ProfileImage} alt="profile" />
                    </WrapperCircle>
                    <LoginUser>
                        <h3 className='t-text-white t-font-extrabold t-text-xl'>Nafisa Sh.</h3>
                        <span>Support manager</span>
                    </LoginUser>
                </LoginUserHolder>
            </NavItemsContainer>
        </Wrapper>
    );
};

export default Sidebar;

const Wrapper = styled.div`
    height: calc(100vh);
    width: calc(20rem - 16px - 16px);
    padding:  0 1rem;
    background: #990D81;
    transition: ease all 0.5s;
    /* @media (max-width: 768px) {
        width: 0rem;
        padding: 0;
        transition: ease all 0.5s;
    } */
`;

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
`

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
`

const LoginUser = styled.div`
    margin-right: 14px;
    span {
        color: rgba(255, 255, 255, 0.5);
    }
`;