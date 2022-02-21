import styled from "styled-components";

export const BaseCircle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${((props) => props.background || '#FAFAFA')};
  overflow: hidden;
  margin: 0 0.8rem;
  transition: ease all 0.5s;
  cursor: pointer;
  `

export const ActionCircle = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #509FEF80;
    overflow: hidden;
    margin: 0 0.8rem;
    transition: ease all 0.5s;
    cursor: pointer;
    svg {
        stroke: #990D81;
        font-size: 1.6rem;
        fill: #990D81;
    }
`