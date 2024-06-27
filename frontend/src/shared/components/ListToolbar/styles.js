import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space_between;
  align-items: center;

  form {
    display: flex;
    align-items: center;

    input {
      width: 300px;
    }

    svg {
      font-size: 20px;
    }

    button {
      width: 80px;
      margin-left: 8px;
    }
  }
`;
