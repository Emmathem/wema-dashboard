import React from 'react'
import styled from 'styled-components';
import { BaseCircle } from './globalstyle.styled';
import { formatNumber } from '../../helpers/functions';

export const DashboardCard = ({ background, title, count }) => {
    return (
        <CardHolder className='shadow-lg bg-white t-rounded-lg'>
            <BaseCircle background={background}></BaseCircle>
            <CardContent>
                <h2>{formatNumber(count)}</h2>
                <h4>{title}</h4>
                <div>0.24% <span>Last month</span></div>
            </CardContent>
        </CardHolder>
    )
}

DashboardCard.propTypes = {};

export default DashboardCard;

const CardHolder = styled.div`
    background: #fff;
    padding: 1.2rem 15px;
    display: flex;
    color: #000;
    height: auto;
transition: ease all 0.5s;
`;

const CardContent = styled.div`
margin-left: 2rem;
transition: ease all 0.5s;
h2 {
    font-weight: 700;
    font-size: 1.63rem;
    margin-bottom: 0;
}
h4 {
    color: #AAAAAA;
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0.71rem;

}
span {
    color: #BDBDBD;
}
`;