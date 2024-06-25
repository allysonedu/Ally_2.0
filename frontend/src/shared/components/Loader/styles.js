import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderStyles = styled.div`
  border: 5px solid ${({ theme }) => theme.text_color}; /* cor do border */
  border-top: 5px solid ${({ theme }) => theme.primary_color}; /* cor do border quando em rotação */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  text-align: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
