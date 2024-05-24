import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(3, 89, 86, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`

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

    > a {
      color: #4572d7;
      display: block;
      margin-top: 20px;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }
    h1 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 800;
      margin: 0;
    }
  }
  /*
  /* .textfield {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
  }
  

  /* .textfield > input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: rgba(39, 245, 238, 0.3);
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }
  */

  .textfield > label {
    color: #f0ffffde;
    margin-bottom: 10px;
  }
`

export const Background = styled.div``
