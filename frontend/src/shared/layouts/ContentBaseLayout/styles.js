import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 67%;

  border-radius: 25px;
  color: ${({ theme }) => theme.text_color};
  transition: all 0.5s ease;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Toolbar = styled.div`
  width: 200%;
  margin-top: 16px;
  background: ${({ theme }) => theme.success_title};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  > input {
  }
`;

export const Content = styled.div`
  margin-top: 16px;
  overflow: auto;
`;
