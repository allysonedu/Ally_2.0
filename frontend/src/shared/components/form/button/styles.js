import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 16px 0px;
  //margin: 25px;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primay_color_light};
  background: ${({ theme }) => theme.primary_color};
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px ${({ theme }) => theme.secondary};
  transition: transform 0.8s blue;

  &:hover {
    transform: translateY(3px);
    box-shadow: 0 5px 1px 0 rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.secondary};
  }
`;
