import { Form } from '@unform/web';

import { useCallback } from 'react';

import { useTheme } from 'styled-components';

import { FiSearch, FiCheck } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';

import { Input, Button } from '../';

import { Container } from './styles';

export const ListToolbar = ({ handleSearch, handleNew }) => {
  const theme = useTheme();

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

// ListToolbar
