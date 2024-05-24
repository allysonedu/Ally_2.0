import { useCallback, useRef } from 'react'

import { FaUserAstronaut } from 'react-icons/fa'

import { GiPadlock } from 'react-icons/gi'

import { Link, useNavigate } from 'react-router-dom'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import { Container, Content, Background } from './styles'

import { Input, Button } from '../../shared/components'
import { useAuth } from '../../shared/hooks/auth'

export const SignIn = () => {
  const formRef = useRef(null)
  const navigate = useNavigate()

  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (formData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Senha com mínimo de 6 caracteres'),
        })

        await schema.validate(formData, { abortEarly: false })
        const { email, password } = formData

        await signIn(email, password)

        navigate('/home')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err)

          formRef.current.setErrors(error)
        }
      }
    },
    [signIn, navigate],
  )
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
                type="email"
                name="email"
                placeholder="Usuário"
                icon={FaUserAstronaut}
              />
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                icon={GiPadlock}
              />
            </div>

            <Button type="submit">Entrar</Button>
            <Link to="#"> Esqueci minha senha</Link>
          </Form>
        </div>
      </Content>
      <Background />
    </Container>
  )
}
