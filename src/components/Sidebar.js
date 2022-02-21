// import Image from 'next/image';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import WemaLogo from '../assets/images/wema-logo.svg';
import { navItems } from '../static/navItems';

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title);
    const history = useHistory();

    const getRigthLink = (item) => {
        setActiveIcon(item.title);
        history.push(item.route);
    }

    return <Wrapper>
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
        </NavItemsContainer>
    </Wrapper>;
};

export default Sidebar;

const Wrapper = styled.div`
    height: calc(100vh);
    border-right: 1px solid #282b2f;
    width: calc(20rem - 16px - 16px);
    padding:  0 1rem;
    background: #990D81;
`;

const LogoContainer = styled.div`
    padding: 1.5rem 0;
`;

const NavItemsContainer = styled.div`
    margin-top: 3rem;

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
    margin-bottom: 1.5rem;
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