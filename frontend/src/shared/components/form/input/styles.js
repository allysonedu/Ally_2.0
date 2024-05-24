/* eslint-disable no-undef */
import styled, { css } from 'styled-components'

import { Tooltip } from '../../tooltip'

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

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(propsTheme) => propsTheme.theme.error_title};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.secondary};
      border-color: ${({ theme }) => theme.secondary};
    `}


  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}

     svg {
    margin-right: 16px;
  }

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
`

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }
`


