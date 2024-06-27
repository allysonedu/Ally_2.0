import { Form } from '@unform/web';

import { useTheme } from 'styled-components'; // useTheme é responsavel por estarmos conseguindo editar o botão de criar novo Assistido

import { FiSearch, FiCheck } from 'react-icons/fi'; // importação de icons
import { MdAdd } from 'react-icons/md';

import { Input, Button } from '../';

import { Container } from './styles';

// handleSearch é o useCallback que esta vindo lá de Assistido

// handleNew é o useCallback que esta vindo lá de Assistido

export const ListToolbar = ({ handleSearch, handleNew }) => {
  const theme = useTheme();
  //buttonStyles responsavel por estarmos conseguindo editar o botão de criar novo Assistido
  const buttonStyles = {
    background: theme.primary_color,
    display: 'flex',
    alignItems: 'center',
    justfyContent: 'center',
    width: '120px',
    left: '161%',
    position: 'absolute',
  };
  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input name="search" type="text" icon={FiSearch} />
        <Button type="submit">
          <FiCheck />
        </Button>
      </Form>

      <Button type="button" style={buttonStyles} onClick={handleNew}>
        <MdAdd size={24} style={{ marginLeft: '16px' }} /> Novo
      </Button>
    </Container>
  );
};

// ListToolbar, responsavel pela parinha de pesquisa os Assistidos
