import React from 'react'
import styled from 'styled-components';
import DashboardCard from './base/DashboardCard';
import MainLayout from './MainLayout'

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
`