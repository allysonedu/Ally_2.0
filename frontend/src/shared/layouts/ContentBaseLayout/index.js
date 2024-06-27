import { Container, Title, Content, Toolbar } from './styles';

// responsavel por renderizar o listToolbar!

export const ContentBaseLayout = ({ title, children, toolbar }) => {
  return (
    <Container>
      <Title>{title}</Title>

      {toolbar && <Toolbar>{toolbar}</Toolbar>}

      <Content>{children}</Content>
    </Container>
  );
};
