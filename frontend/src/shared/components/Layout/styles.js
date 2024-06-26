import styled from 'styled-components';

export const GridLayout = styled.div`
  display: flex;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS CT'
    'AS CT';

  height: 100vh;
`;
