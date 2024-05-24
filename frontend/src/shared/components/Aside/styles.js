import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  height: 100vh;
  width: 100%;
`
export const NamePage = styled.span`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 25px;
    text-align: left;
    margin-left: 5px;
    opacity: 1;
    transition: opacity 0.5s ease;
    padding-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.text_Asid};
  }
`
export const IconBars = styled.div`
  display: flex;
  align-items: center;
  min-width: 50px;
  font-size: 46px;
  padding-bottom: 10px;
  opacity: 1;
  transition: opacity 0.5s ease;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.06);
  }
`

export const Content = styled.div`
  width: 250px;
  height: 100%;
  padding: 20px 15px;
  background: ${({ theme }) => theme.primary_Aside};
  transition:
    width 0.5s ease,
    background 0.5s ease;
  overflow: hidden;

  .ButtonNew {
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    display: flex;

    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.primary_Aside};
    font-size: 20px;
    opacity: 1;
    transition: opacity 0.5s ease;
    white-space: nowrap;
    background-color: black;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.04);
    }
    .text_button_new_assistid {
      padding-top: 4px;
      font-size: 18px;
    }
    .Icon_button {
      align-items: center;
      min-width: 30px;
      font-size: 30px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.06);
      }
    }
  }

  li {
    list-style: none;
    display: flex;
    margin-bottom: 5px;
  }

  a {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    white-space: nowrap;
    &:hover {
      color: ${({ theme }) => theme.color_bottom};
      background-color: ${({ theme }) => theme.text_Aside_menu};
    }
  }

  .Icon_menu {
    min-width: 40px;
    font-size: 20px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
    }
  }

  .linea {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color_linear};
  }

  .mod-dark {
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
  .mod-dark .info {
    width: 150px;
    height: 45px;
    overflow: hidden;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_Aside_menu};
  }

  .mod-dark .info .text-dark {
    white-space: nowrap;
  }

  .mod-dark .info .Icon-dark {
    min-width: 40px;
    font-size: 20px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
    }
  }

  .mod-dark .switch {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .mod-dark .switch .base {
    position: relative;
    display: flex;
    align-items: center;
    background-color: wheat;
    width: 35px;
    height: 20px;

    border-radius: 50px;
  }

  .mod-dark .switch .base .circulo {
    position: absolute;
    width: 18px;
    height: 90%;
    background-color: ${({ theme }) => theme.text_Aside_menu};
    border-radius: 50%;
    left: 2px;
  }

  .mod-dark .switch .base .circulo.prendido {
    left: 15px;
  }
`
