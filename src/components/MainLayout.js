import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import AOS from 'aos';

const MainLayout = ({ children }) => {

  useEffect(() => {
    AOS.init({
        duration: 600,
        once: true,
    });
}, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainWrapper>
        <Header />
        <ChildrenWrapper data-aos="fade-up">
          {children}
        </ChildrenWrapper>
      </MainWrapper>
    </Wrapper>
  )
}

export default MainLayout

const MainWrapper = styled.div`
  background: #E5E5E5;
  flex: 1;
  transition: ease all 0.5s;
`

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0a0b0d;
    color: white;
    display: flex;
    overflow: hidden;
`;

const ChildrenWrapper = styled.div`
  padding: 1.5rem 2rem;
  transition: ease all 0.5s;
`;