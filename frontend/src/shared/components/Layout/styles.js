import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`

export const GridLayout = styled.div`
  display: flex;
  width: 90%;
  height: 93%;
  margin: 25px auto;
  box-shadow: 0px 10px 40px #00000088;
  border-radius: 15px;

  overflow: hidden;

  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS  CT'
    'AS  CT';
`
