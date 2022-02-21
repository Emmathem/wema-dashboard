import React from 'react'
import styled from 'styled-components';
import DashboardBarGraph from './base/DashboardBarGraph';
import DashboardCard from './base/DashboardCard';
import DashboardGraph from './base/DashboardGraph';
import DashboardTableRecord from './base/DashboardTableRecord';
import MainLayout from './MainLayout'
import { Col, Row } from 'antd';

const Dashboard = () => {
  return (
    <>
      <MainLayout>
        <CardContainer>
          <DashboardCard background={'#2F49D1'} title='Pending Requests' count='948494' />
          <DashboardCard background={'#FFB648'} title='Approved Requests' count='948494' />
          <DashboardCard background={'#5F2EEA'} title='Total Agents' count='948494' />
          <DashboardCard background={'#4BDE97'} title='Total Users' count='948494' />
        </CardContainer>
        <Row gutter={24}>
          <Col xs={24} lg={18} xl={18}>
            <SectionContainer className='t-shadow-md'>
              <SectionTitle>User Inflow Statistics</SectionTitle>
              <DashboardGraph />
            </SectionContainer>
          </Col>
          <Col xs={24} lg={6} xl={6}>
            <SectionContainer className='t-shadow-md' background='#990D81'>
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
            <SectionContainer className='t-shadow-md'>
              <SectionTitle>Recent Requests</SectionTitle>
              <DashboardTableRecord />
            </SectionContainer>
          </Col>
        </Row>
      </MainLayout>
    </>
  )
}

export default Dashboard;

// export const DashboardWrapper = styled.div``

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  transition: ease all 0.5ms;
  margin-bottom: 14px;
`

const SectionContainer = styled.div`
  transition: ease all 0.5ms;
  margin-bottom: 14px;
  background: ${(props) => props.background || '#fff'};
  padding: 5px;
  border-radius: 7px;
`

const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 15px;
  padding: 5px 15px;
`