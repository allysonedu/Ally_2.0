import { Container, Content } from './styles';

import { useRef, useCallback, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { FiHash } from 'react-icons/fi';

import { GiPadlock } from 'react-icons/gi';

import getValidationErrors from '../../shared/utils/getValidationErrors'; // Lançar o error na tela

import { resetPassword } from '../../api/allyApi';

import { Input, Button, LoaderAlly } from '../../shared/components';

export const ResetPassword = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Validar o formulário, e ajustar o tipo de erro que quero que apresente!
  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});
        setIsLoading(true);

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha é obrigatório!'),
          confirmPassword: Yup.string().required(
            'Confirmação de senha é obrigatório!'
          ),
          token: Yup.string().min(6).required('Token é obrigatório!'),
        });

        await schema.validate(data, { abortEarly: false });

        const { password, /*confirmPassword,*/ token } = data;

        await resetPassword({ token, password });

        setIsLoading(false);

        navigate('/');
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
      <Content>
        <img src="forgot.svg" alt="donation" />
        <div className="card-login">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar minha senha</h1>

            <div className="textfield">
              <Input
                name="token"
                type="text"
                placeholder="Digite seu token"
                icon={FiHash}
              />

              <br />

              <Input
                name="password"
                icon={GiPadlock}
                type="password"
                placeholder="Digite sua nova senha"
              />

              <Input
                name="confirmPassword"
                icon={GiPadlock}
                type="password"
                placeholder="Confirme sua nova senha"
              />
            </div>

            {isLoading ? (
              <LoaderAlly />
            ) : (
              <Button type="submit">Resetar Senha</Button>
            )}
            <Link to="/forgot-password"> Voltar </Link>
          </Form>
        </div>
      </Content>
    </Container>
  );
};
