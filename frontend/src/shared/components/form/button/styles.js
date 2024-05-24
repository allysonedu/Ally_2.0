import styled from 'styled-components'

export const ButtonBox = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  color: #4572d7;
  background: rgba(39, 245, 238, 0.8);
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px ${({ theme }) => theme.secondary};
  transition:
    transform 0.8s blue,
    background-color 0.3s blue;
  &:hover {
    transform: translateY(3px);
    box-shadow: 0 5px 1px 0 rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 10px 40px -12px ${({ theme }) => theme.secondary};
  }
`
