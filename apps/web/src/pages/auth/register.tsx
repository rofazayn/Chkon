import { useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import AuthLayout from '../../components/auth-layout'
import RegisterForm from '../../components/register-form'

export default function RegisterPage() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Create an account - Chkon</title>
        <meta name='description' content='Create your own Chkon account.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </>
  )
}
