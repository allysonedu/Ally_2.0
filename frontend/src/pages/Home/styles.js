import styled from 'styled-components';

export const Container = styled.div`
  border-left: 9px;
  background: ${({ theme }) => theme.home_color};
  width: 100%;
  height: 100%;
  border-radius: 25px;
  transition: all 0.5s ease;
  display: flex;

  h1 {
    position: absolute;
    right: 59%;
    padding-top: 10%;
    border-radius: 25px;
    color: ${({ theme }) => theme.text_color};
    transition: all 0.5s ease;
  }

  span {
    color: ${({ theme }) => theme.color_name};
  }
  img {
    width: 550px;
    display: flex;
    position: relative;
    left: 50%;
  }

  p {
    position: absolute;
    right: 52.7%;
    padding-top: 20%;
    border-radius: 25px;
    color: ${({ theme }) => theme.text_color};
    transition: all 0.5s ease;
  }
  Button {
    position: relative;
    right: 260%;
    top: 50%;

    a {
      color: ${({ theme }) => theme.text_color};
      width: 100%;
      height: 100%;
    }
  }
`;
