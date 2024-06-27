import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 450px;
    display: flex;
  }

  .card-login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > a {
      color: ${({ theme }) => theme.three};
      display: block;
      margin-top: 20px;
      transition: all 0.3;

      &:hover {
        transform: scale(1.02);
      }
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
    margin: 10px;

    h1 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 800;
      margin: 0;
      margin-bottom: 15px;
    }

    > button {
      margin: 25px;
    }
  }
`;
