import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { HiBell } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import ProfileImage from '../assets/images/profileImage.png'
import { Select } from 'antd';
const { Option } = Select;
const Header = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <RightNavItems>
        <SearchInput>
          <SearchInputIcon><FiSearch /></SearchInputIcon>
          <input className='input-search' placeholder='Enter Keyboards...' />
        </SearchInput>
        <SelectContainer>
          <Select style={{ width: '70px', height: '40px' }} defaultValue="EN" size='large'>
            <Option value="en">EN</Option>
          </Select>
        </SelectContainer>
        <WrapperCircle><BsFillSunFill /></WrapperCircle>
        <WrapperCircle><HiBell /></WrapperCircle>
        <WrapperCircle><img src={ProfileImage} alt="profile" /></WrapperCircle>
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
    transition: ease all 0.5s;
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
  align-items: center;
  border-radius: 6px;
  width: calc(20rem - 10px);
  margin-right: 5rem;
  overflow: hidden;
  transition: ease all 0.5s;
  background: #FAFAFA;
  .input-search {
    background: #FAFAFA;
    height: 45px;
    border: none;
    width: 100%;
    padding: 5px 1rem;
    color: #000;
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
      color: #e5e5e5;
      font-weight: 800;
    }
    &:focus {
      outline: none;
      border: none;
    }
  }
`

const SearchInputIcon = styled.div`
  padding: 0 7px;
  left: 0;
  svg {
    font-size: 2rem;
    stroke: #e5e5e5;
  }
`;

const WrapperCircle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #FAFAFA;
  overflow: hidden;
  margin: 0 0.8rem;
  transition: ease all 0.5s;
  cursor: pointer;
  svg {
    fill: #D6D7E3;
    font-size: 1.5rem;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      fill: #000;
      transition: ease all 0.5s;
    }
  }
`;

const SelectContainer = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    font-weight: 800;
    font-size: 1.2rem;
  }
`;