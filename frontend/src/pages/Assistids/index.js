import { useCallback } from 'react';

import { Container } from './styles';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { ListToolbar } from '../../shared/components'; // importação do listToolbar que é o componente barra de pesquisa com o botão de criar novo usuário!

export const Assistids = () => {
  const handleSearch = useCallback(() => {
    console.log('handleSearch');
  }, []);

  const handleNew = useCallback(() => {
    console.log('handleNew');
  }, []);

  return (
    <Container>
      <ContentBaseLayout
        title={'Cadastro de Assistido'}
        toolbar={
          <ListToolbar handleSearch={handleSearch} handleNew={handleNew} />
        }
      >
        {/*children*/}
        <span>opaaaa</span>
      </ContentBaseLayout>
    </Container>
  );
};
