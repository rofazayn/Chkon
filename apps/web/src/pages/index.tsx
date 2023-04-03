import { Box, useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import LoginForm from '../components/login-form'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Chkon.</title>
        <meta
          name='description'
          content='Digital Identity at your fingertips.'
        />
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
        <LoginForm />
      </Box>
    </>
  )
}
