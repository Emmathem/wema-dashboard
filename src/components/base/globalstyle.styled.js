import styled from 'styled-components';

export const BaseCircle = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% !important;
    background: ${props => props.background || '#FAFAFA'};
    overflow: hidden;
    margin: 0 0.8rem;
    transition: ease all 0.5s;
    cursor: pointer;
    svg {
        font-size: 2rem;
        //fill: '';
    }
`;

export const ActionCircle = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #509fef80;
    overflow: hidden;
    margin: 0 0.8rem;
    transition: ease all 0.5s;
    cursor: pointer;
    svg {
        stroke: #990d81;
        font-size: 1.6rem;
        fill: #990d81;
    }
`;

export const WrapperCircle = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fafafa;
    overflow: hidden;
    margin: 0 0.8rem;
    transition: ease all 0.5s;
    cursor: pointer;
    svg {
        fill: #d6d7e3;
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
