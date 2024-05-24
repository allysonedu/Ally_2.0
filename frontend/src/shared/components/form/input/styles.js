import styled, { css } from 'styled-components';

import { Tooltip } from '../../tooltip';
// disagner de todos os Input da aplicação!
export const Container = styled.div`
  margin: 10px;
  width: 450px;
  border-radius: 10px;
  padding: 16px;

  background: ${({ theme }) => theme.input};
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  border: 2px solid ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.secondary};
      border-color: ${({ theme }) => theme.secondary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}

  input {
    background: transparent;
    border: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    width: 100%;
  }
  > label {
    color: ${({ theme }) => theme.text};
    margin-bottom: 10px;
  }
  > input::placeholder {
    color: #f0ffff94;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  // Importação do tooltip aqui!
  //Disagner do Icon de error
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }
`;

/**
 * background: ${({ theme }) => theme.primary_light};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.secondary};
  padding: 16px;
  width: 450px;
  font-weight: bold;
  margin: 5px;
  color: black;
  display: flex;
  align-items: center;
 */
