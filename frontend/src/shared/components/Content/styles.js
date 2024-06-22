import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  position: relative;

  flex: 1;
  background: ${({ theme }) => theme.sidebar_color};
  color: ${({ theme }) => theme.text_color};
  transition: all 0.2s ease;
  border: 5px solid ${({ theme }) => theme.sidebar_color};
  transition: all 0.5s ease;
`;
