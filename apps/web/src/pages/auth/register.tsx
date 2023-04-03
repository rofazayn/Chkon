import { Box, useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import RegisterForm from '../../components/register-form'

export default function RegisterPage() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Create an account- Chkon</title>
        <meta name='description' content='Create your own Chkon account.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        sx={{
          minHeight: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RegisterForm />
      </Box>
    </>
  )
}
