import { useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import AuthLayout from '../../components/_layouts/auth-layout'
import LoginForm from '../../components/login-form'

export default function LoginPage() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Login to account - Chkon</title>
        <meta
          name='description'
          content='Authenticate into your Chkon account.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  )
}
