import { Container } from './styles';

export const Button = ({ children, ...rest }) => {
  return <Container {...rest}> {children}</Container>; // responsavel por a edição de todo os Botoes da aplicação!
};
