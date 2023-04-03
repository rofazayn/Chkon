import { Box, Button, Center, Group, useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import LoginForm from '../components/login-form'
import Link from 'next/link'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Chkon.</title>
        <meta
          name='description'
          content='Digital identity at your fingertips.'
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
        {/* <LoginForm /> */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 440,
            borderRadius: 16,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
            padding: 32,
            // paddingBottom: 40,
          }}
        >
          <Center>
            <Group spacing={12}>
              <Button
                component={Link}
                href='/auth/login'
                variant='light'
                color='gray'
              >
                Connect to Chkon
              </Button>
              <Button component={Link} href='/auth/register'>
                Create an account
              </Button>
            </Group>
          </Center>
        </Box>
      </Box>
    </>
  )
}
