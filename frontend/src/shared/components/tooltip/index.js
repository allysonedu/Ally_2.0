import { Container } from './styles';

export const Tooltip = ({ title, className, children }) => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

// Tooltip responsavel por deixar mais bonito a esposição do erro na tela, por erro de autenticação!
