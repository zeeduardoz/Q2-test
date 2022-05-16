import { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Formik } from 'formik'
import { setTimeout } from 'timers'

import AuthHeadContainer from '@components/AuthHeadContainer'
import Button from '@components/Button'
import Input from '@components/Input'
import Line from '@components/Line'

import { useAccount } from '@contexts/account'
import { withSSRGuest } from '@hooks/withSSRGuest'

import { SignInSchema } from '@schemas/auth'

import ChevronRightIcon from '@assets/icons/chevron-right.svg'
import EmailIcon from '@assets/icons/email.svg'
import LoaderIcon from '@assets/icons/loader.svg'
import LockIcon from '@assets/icons/lock.svg'
import BackgroundImage from '@assets/images/auth-background.png'

import {
  ButtonWrapper,
  Container,
  FormContent,
  ImageBackground,
  InputsContainer,
  LeftContent,
  LinkCreateAccount,
  NoAccountWrapper,
  QuestionAccount,
  RightContent,
} from './styles'

const Home: NextPage = () => {
  const router = useRouter()
  const { pushSignIn } = useAccount()
  const [isLoading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Q2Panel - Acessar</title>
      </Head>

      <Container>
        <LeftContent>
          <ImageBackground>
            <Image src={BackgroundImage} alt='Background' layout='fill' />
          </ImageBackground>
        </LeftContent>
        <RightContent>
          <FormContent>
            <AuthHeadContainer title='Acessar Conta' description='Por favor, preencha os dados de acesso abaixo' />
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={SignInSchema}
              validateOnChange={true}
              onSubmit={(values) => {
                setLoading(true)
                pushSignIn(values)
                  .then(() => {
                    router.push('/')
                  })
                  .finally(() => {
                    setTimeout(() => setLoading(false), 500)
                  })
              }}
            >
              {({ handleSubmit, setFieldValue, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <InputsContainer>
                    <Input
                      name='email'
                      id='email'
                      label='E-mail'
                      placeholder='Digite o e-mail'
                      value={values.email}
                      error={errors.email}
                      iconLeft={<EmailIcon />}
                      onChange={(e) => {
                        setFieldValue('email', e.target.value)
                      }}
                    />
                    <Input
                      name='password'
                      id='password'
                      type='password'
                      label='Senha'
                      placeholder='Digite a senha'
                      value={values.password}
                      error={errors.password}
                      iconLeft={<LockIcon />}
                      onChange={(e) => {
                        setFieldValue('password', e.target.value)
                      }}
                      secret
                    />
                  </InputsContainer>
                  <ButtonWrapper>
                    <Button
                      type='submit'
                      title='Entrar'
                      variant='primary'
                      width={45}
                      iconRight={isLoading ? <LoaderIcon /> : <ChevronRightIcon />}
                      disabled={!values.email || !values.password || !!errors.email || !!errors.password || isLoading}
                    />
                  </ButtonWrapper>
                </form>
              )}
            </Formik>
            <Line />
            <NoAccountWrapper>
              <QuestionAccount>Não tem uma conta?</QuestionAccount>
              <LinkCreateAccount>Criar uma conta</LinkCreateAccount>
            </NoAccountWrapper>
          </FormContent>
        </RightContent>
      </Container>
    </>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} }
})

export default Home
