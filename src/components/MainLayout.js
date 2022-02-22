import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import AOS from 'aos';

const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const openDrawerOnMobile = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     const drawerEffectClick = e => {
    //         if (sidebarRef.current !== null && !sidebarRef.current.contains(e.target)) {
    //             setIsOpen(!isOpen);
    //         }
    //     };
    //     if (setIsOpen) {
    //         window.addEventListener('click', drawerEffectClick);
    //     }
    //     return () => {
    //         window.removeEventListener('click', drawerEffectClick);
    //     };
    // }, [setIsOpen]);

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    return (
        <Wrapper>
            <Sidebar isOpen={isOpen} closeDrawer={openDrawerOnMobile} sidebarRef={sidebarRef} />
            <MainWrapper>
                <Header openDrawer={openDrawerOnMobile} />
                <ChildrenWrapper data-aos="fade-up">{children}</ChildrenWrapper>
            </MainWrapper>
        </Wrapper>
    );
};

export default MainLayout;

const MainWrapper = styled.div`
    background: #e5e5e5;
    flex: 1;
    transition: ease all 0.5s;
    margin-left: 18rem;
    @media (max-width: 449px) {
        margin-left: 0;
    }
`;

const Wrapper = styled.div`
    //width: 100vw;
    height: 100vh;
    //background-color: #0a0b0d;
    color: white;
    //display: flex;
    //overflow: hidden;
`;

const ChildrenWrapper = styled.div`
    padding: 1.5rem 2rem;
    transition: ease all 0.5s;
    max-height: 100%;
    //overflow: hidden;
    //overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
