import { Container, Content } from './styles';

import { useRef, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { FaUserAstronaut } from 'react-icons/fa';

import { GiPadlock } from 'react-icons/gi';

import getValidationErrors from '../../shared/utils/getValidationErrors'; // Lançar o error na tela

import { Input, Button } from '../../shared/components';
import { useAuth } from '../../shared/context/AuthContext';

export const SignIn = () => {
  const formRef = useRef(null);
  const navigate = useNavigate(); // navegação do usuario cadastrado para Home!

  const { signIn } = useAuth(); // importação useAuth/hook do AuthContext.js!

  // Validar o formulário, e ajustar o tipo de erro que quero que apresente!
  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        console.log(data);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'), //
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Senha com mínimo de 6 caracteres'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        await signIn({ email, password });

        navigate('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current.setErrors(error);
          return;
        }
      }
    },
    [navigate, signIn]
  );

  return (
    <Container>
      <Content>
        <img src="Background.svg" alt="donation" />
        <div className="card-login">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Seu Login</h1>

            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <Input
                name="email"
                type="email"
                placeholder="Usuário"
                icon={FaUserAstronaut}
              />
            </div>
            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                icon={GiPadlock}
              />
            </div>

            <Button type="submit"> Entrar </Button>
          </Form>
          <a href="/forgot-password"> Esqueci minha senha</a>
        </div>
      </Content>
    </Container>
  );
};
