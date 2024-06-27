import { Container } from './styles';
import { Button } from '../../shared/components';
import { Form } from '@unform/web';
import { useNavigate } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import getValidationErrors from '../../shared/utils/getValidationErrors';

export const Home = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});
        console.log(data);

        // addToast({
        // type: 'success',
        //  title: 'Usuário logado com sucesso!',
        // });

        navigate('/assistids');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current.setErrors(error);
          return;
        }
      }
    },
    [navigate]
  );
  return (
    <Container>
      <img src="imageDonation.svg" alt="Donation" />
      <h1>
        Bem-Vindo ao <span>Ally</span>
        <br />
        Cadastre o Assistido aqui!
      </h1>
      <p> O intuito desse set é cadrastrar pessoas que recebem cesta básica </p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};
