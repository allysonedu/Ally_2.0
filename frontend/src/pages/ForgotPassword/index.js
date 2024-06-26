import { Container, Content } from './styles';

import { useRef, useCallback, useState, useEffect } from 'react';

//useRef no React é utilizada para acessar diretamente um elemento do DOM ou um valor mutável de um componente funcional. Ela retorna um objeto ref que pode ser utilizado para armazenar referências a elementos HTML ou a valores que persistem entre as renderizações, sem acionar uma nova renderização quando são modificados.

import { useNavigate, Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { FaUserAstronaut } from 'react-icons/fa';

import getValidationErrors from '../../shared/utils/getValidationErrors'; // Lançar o error na tela

import { useToast } from '../../shared/context/ToastContext';

import { forgotPassword } from '../../api/allyApi';

import { Input, Button, LoaderAlly } from '../../shared/components';

import 'react-perfect-scrollbar/dist/css/styles.css';

export const ForgotPassword = () => {
  const formRef = useRef(null);
  const navigate = useNavigate(); // navegar para outra pagina!
  const { addToast } = useToast(); // importão dos Toast de importação!
  const [isLoading, setIsLoading] = useState(false); // funcão de loading: carregar pagina!
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); // temporizador do loading
  }, [isLoading]);

  // Validar o formulário, e ajustar o tipo de erro que quero que apresente!
  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});
        setIsLoading(true);

        const schema = Yup.object().shape({
          email: Yup.string().email().required('Email é obrigatório!'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email } = data;

        await forgotPassword(email);

        addToast({
          type: 'success',
          title: 'Token Enviado',
          description: 'Por favor verifique seu email',
        });

        setIsLoading(false);

        navigate('/reset-password');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err); // validação do erro!

          formRef.current.setErrors(error);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no login',
          description: 'Erro ao logar, verificar suas credenciais',
        });
      }
    },
    [navigate, addToast]
  );

  return (
    <Container>
      <Content>
        <img src="forgot.svg" alt="donation" />
        <div className="card-login">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Esqueceu sua senha ?</h1>

            <Input
              name="email"
              type="email"
              placeholder="Email"
              icon={FaUserAstronaut}
            />

            {isLoading ? (
              <LoaderAlly />
            ) : (
              <Button type="submit"> Enviar Token </Button>
            )}
            <Link to="/"> Voltar </Link>
          </Form>
        </div>
      </Content>
    </Container>
  );
};
