import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    color: ${({ theme }) => theme.three};
    display: block;
    margin-top: 20px;
    transition: all 0.3;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 510px;
    display: flex;
  }

  .card-login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .textfield > label {
      color: ${({ theme }) => theme.text};
    }
  }

  form {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: ${({ theme }) => theme.boxlogin};
    border-radius: 20px;
    box-shadow: 0px 10px 40px;

    h1 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 800;
      margin: 0;
      margin-bottom: 15px;
    }

    > a {
      color: ${({ theme }) => theme.three};
      display: block;
      margin-top: 5px;
      transition: all 0.3;

      &:hover {
        transform: scale(1.02);
      }
    }
    > button {
      margin: 25px;
    }
  }
`;
