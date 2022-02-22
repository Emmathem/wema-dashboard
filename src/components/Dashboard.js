import React from 'react';
import styled from 'styled-components';
import DashboardBarGraph from './base/DashboardBarGraph';
import DashboardCard from './base/DashboardCard';
import DashboardGraph from './base/DashboardGraph';
import DashboardTableRecord from './base/DashboardTableRecord';
import MainLayout from './MainLayout';
import { Col, Row } from 'antd';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import ApproveIcon from '../assets/images/icons/ApproveIcon.svg';
import PendingIcon from '../assets/images/icons/PendingIcon.svg';
import TotalIcon from '../assets/images/icons/TotalIcon.svg';
import UsersIcon from '../assets/images/icons/UsersIcon.svg';

const Dashboard = () => {
    return (
        <>
            <MainLayout>
                <Row gutter={24} className="t-mb-4">
                    <DashboardCard background={'#2F49D1'} title="Pending Requests" count="948494" icon={PendingIcon}>
                        <CardFooter>
                            <span className="rise">
                                <AiOutlineRise /> 4.27%
                            </span>
                            <span>Last month</span>
                        </CardFooter>
                    </DashboardCard>
                    <DashboardCard background={'#FFB648'} title="Approved Requests" count="948494" icon={ApproveIcon}>
                        <CardFooter>
                            <span className="rise">
                                <AiOutlineRise /> 0.24%
                            </span>
                            <span>Last month</span>
                        </CardFooter>
                    </DashboardCard>
                    <DashboardCard background={'#5F2EEA'} title="Total Agents" count="948494" icon={TotalIcon}>
                        <CardFooter>
                            <span className="fall">
                                <AiOutlineFall /> 1.64%
                            </span>
                            <span>Last month</span>
                        </CardFooter>
                    </DashboardCard>
                    <DashboardCard background={'#5f2eea2e'} title="Total Users" count="948494" icon={UsersIcon}>
                        <CardFooter>
                            <span className="fall">
                                <AiOutlineFall /> 0.00%
                            </span>
                            <span>Last month</span>
                        </CardFooter>
                    </DashboardCard>
                </Row>
                <Row gutter={24}>
                    <Col xs={24} lg={18} xl={18}>
                        <SectionContainer className="t-shadow-md">
                            <SectionTitle>User Inflow Statistics</SectionTitle>
                            <DashboardGraph />
                        </SectionContainer>
                    </Col>
                    <Col xs={24} lg={6} xl={6}>
                        <SectionContainer className="t-shadow-md" background="#990D81">
                            <DashboardBarGraph />

                            <div className="t-px-4 t-py-4">
                                <span className="t-font-semibold t-text-white t-text-xl">New Users</span> <br />
                                (+23%) than last week
                            </div>
                        </SectionContainer>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col xs={24} lg={18} xl={18}>
                        <SectionContainer className="t-shadow-md">
                            <SectionTitle>Recent Requests</SectionTitle>
                            <DashboardTableRecord />
                        </SectionContainer>
                    </Col>
                </Row>
            </MainLayout>
        </>
    );
};

export default Dashboard;

// const CardContainer = styled.div`
//     display: grid;
//     gap: 24px;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     transition: ease all 0.5ms;
//     margin-bottom: 14px;
// `;

const SectionContainer = styled.div`
    transition: ease all 0.5ms;
    margin-bottom: 14px;
    background: ${props => props.background || '#fff'};
    padding: 5px;
    border-radius: 7px;
`;

const SectionTitle = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    color: #000;
    margin-bottom: 15px;
    padding: 5px 15px;
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    svg {
        padding-right: 5px;
        font-size: 1.2rem;
    }
    span {
        padding-left: 5px;
        display: flex;
    }
    .rise {
        color: #4bde97;
    }
    .fall {
        color: #f26464;
    }
`;
