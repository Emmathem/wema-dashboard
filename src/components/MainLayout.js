import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Sidebar />
      <main>{children}</main>
    </MainWrapper>
  )
}

export default MainLayout

const MainWrapper = styled.div`
  background: #E5E5E5;
`