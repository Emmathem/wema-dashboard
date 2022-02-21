import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { HiBell } from 'react-icons/hi';
import ProfileImage from '../assets/images/profileImage.png'

const Header = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <RightNavItems>
        <SearchInput>
          <SearchInputIcon><FiSearch /></SearchInputIcon>
          <input className='input-search' placeholder='Enter Keyboard' />
        </SearchInput>
        <WrapperCircle><HiBell /></WrapperCircle>
        <WrapperCircle><HiBell /></WrapperCircle>
        <WrapperCircle><img src={ProfileImage} alt="profile image" /></WrapperCircle>
      </RightNavItems>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
    width: calc(100% - 0);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    background: #fff;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    flex: 1;
    color: #000;
`;

const RightNavItems = styled.div`
    display: flex;
    align-items: center;
`

const SearchInput = styled.div`
  display: flex;
  position: relative;
  border-radius: 6px;
  .input-search {
    background: #FAFAFA;
    height: 40px;
    border: none;
  }
`

const SearchInputIcon = styled.div`
  position: absolute;
`;

const WrapperCircle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #FAFAFA;
  border: 1px solid #000;
  overflow: hidden;
  margin-right: 2rem;
  svg {
    fill: #D6D7E3;
    font-size: 1.5rem;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;