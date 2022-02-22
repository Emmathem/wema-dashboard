import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../helpers/functions';
import { Col } from 'antd';

export const DashboardCard = ({ title, count, icon, children }) => {
    return (
        <Col xs={24} lg={6} xl={6}>
            <CardHolder className="t-bg-white t-rounded-lg">
                <BaseImage>
                    <img src={icon} alt="icon" />
                </BaseImage>
                <CardContent>
                    <h2>{formatNumber(count)}</h2>
                    <h4>{title}</h4>
                    <div>{children}</div>
                </CardContent>
            </CardHolder>
        </Col>
    );
};

DashboardCard.propTypes = {};

export default DashboardCard;

const CardHolder = styled.div`
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.06);
    padding: 1.2rem 15px;
    display: flex;
    color: #000;
    height: auto;
    transition: ease all 0.5s;
    margin-bottom: 1rem;
`;

const BaseImage = styled.div``;

const CardContent = styled.div`
    margin-left: 2rem;
    transition: ease all 0.5s;
    h2 {
        font-weight: 700;
        font-size: 1.63rem;
        margin-bottom: 0;
    }
    h4 {
        color: #aaaaaa;
        font-size: 1rem;
        font-weight: normal;
        margin-bottom: 0.71rem;
    }
    span {
        color: #bdbdbd;
    }
`;
