import { ButtonBox } from './styles'

export const Button = ({ children, ...rest }) => {
  return <ButtonBox {...rest}>{children}</ButtonBox>
}
