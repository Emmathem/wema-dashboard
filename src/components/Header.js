import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { HiBell } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import ProfileImage from '../assets/images/profileImage.png';
import WemaLogo from '../assets/images/wema-logo.svg';
import { WrapperCircle } from './base/globalstyle.styled';
import { Select } from 'antd';
const { Option } = Select;

const Header = props => {
    return (
        <Wrapper>
            <Title>
                <HeaderSvg onClick={props.openDrawer}>
                    <img src={WemaLogo} alt="logo" />
                </HeaderSvg>
                Dashboard
            </Title>
            <RightNavItems>
                <SearchInput className="t-hidden lg:t-block">
                    <SearchInputIcon>
                        <FiSearch />
                    </SearchInputIcon>
                    <input className="input-search" placeholder="Enter Keyboards..." />
                </SearchInput>
                <SelectContainer className="t-hidden lg:t-block">
                    <Select style={{ width: '70px', height: '40px' }} defaultValue="EN" size="large">
                        <Option value="en">EN</Option>
                    </Select>
                </SelectContainer>
                <WrapperCircle className="t-hidden lg:t-block">
                    <BsFillSunFill />
                </WrapperCircle>
                <WrapperCircle>
                    <HiBell />
                </WrapperCircle>
                <WrapperCircle>
                    <img src={ProfileImage} alt="profile" />
                </WrapperCircle>
            </RightNavItems>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #fff;
    transition: ease all 0.5s;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    flex: 1;
    color: #000;
    display: flex;
    align-items: center;
    @media (max-width: 449px) {
        flex: 0 1;
    }
`;

const HeaderSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #990d81;
    margin-right: 14px;
    transition: ease all 0.5s;
    cursor: pointer;
    img {
        width: 25px;
    }
    @media (min-width: 768px) {
        display: none;
    }
`;

const RightNavItems = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 6px;
    width: calc(20rem - 10px);
    margin-right: 5rem;
    overflow: hidden;
    transition: ease all 0.5s;
    background: #fafafa;
    .input-search {
        background: #fafafa;
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
    @media (max-width: 449px) {
        display: none;
    }
`;

const SearchInputIcon = styled.div`
    padding: 0 7px;
    left: 0;
    svg {
        font-size: 2rem;
        stroke: #e5e5e5;
    }
`;

const SelectContainer = styled.div`
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: none;
        font-weight: 800;
        font-size: 1.2rem;
    }
`;
