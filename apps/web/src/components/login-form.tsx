import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import {
  IconArrowBack,
  IconHash,
  IconLock,
  IconLogin,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const LoginForm = () => {
  const theme = useMantineTheme()
  return (
    <Box w='100%'>
      <Container size='xs'>
        <Center>
          <Box
            sx={{
              width: '100%',
              maxWidth: 440,
              borderRadius: 6,
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
              padding: 32,
              paddingBottom: 40,
            }}
          >
            <Flex
              direction={'row'}
              align='top'
              justify='space-between'
              gap={16}
              mb={20}
            >
              <Flex direction={'row'} align='center' gap={16}>
                <Box>
                  <Image
                    src={'/assets/png/logo.png'}
                    alt='chkon logo'
                    width='56'
                    height='56'
                  />
                </Box>
                <Flex direction='column'>
                  <Text size='xl' weight='bold' mb={-5}>
                    Chkon: E-ID
                  </Text>
                  <Text color='dimmed'>Login to your account.</Text>
                </Flex>
              </Flex>
              <Box>
                <ActionIcon
                  variant='subtle'
                  size='xl'
                  component={Link}
                  href='/'
                >
                  <IconArrowBack size={24} style={{ opacity: 0.3 }} />
                </ActionIcon>
              </Box>
            </Flex>

            <Stack spacing={4}>
              <TextInput
                required
                withAsterisk={false}
                type='text'
                placeholder='Enter your username'
                label='Username'
                variant='filled'
                description={
                  <Text component='span'>
                    The username you used to register,{' '}
                    <Anchor
                      component={Link}
                      href='/'
                      color='none'
                      weight='bold'
                    >
                      Forgot it?
                    </Anchor>
                  </Text>
                }
                rightSection={<IconHash size={20} style={{ opacity: 0.3 }} />}
              />
              <TextInput
                required
                type='password'
                withAsterisk={false}
                placeholder='Enter your password'
                label='Password'
                variant='filled'
                description={
                  <Text component='span'>
                    The password you picked,{' '}
                    <Anchor
                      component={Link}
                      href='/'
                      color='none'
                      weight='bold'
                    >
                      Forgot password?
                    </Anchor>
                  </Text>
                }
                rightSection={<IconLock size={20} style={{ opacity: 0.3 }} />}
              />
            </Stack>

            <Stack spacing={16} mt={24}>
              <Button
                fullWidth
                loaderProps={{
                  size: 'sm',
                }}
                rightIcon={<IconLogin />}
                sx={{
                  paddingInline: 16,
                  minHeight: 48,
                  '& > div': {
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                }}
              >
                Connect to my account
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center mt={12}>
          <Text size='sm' sx={{ opacity: 0.6 }}>
            You don&apos;t have an account?{' '}
            <Anchor
              component={Link}
              href='/auth/register'
              color='none'
              weight='bold'
            >
              Register
            </Anchor>
          </Text>
        </Center>
      </Container>
    </Box>
  )
}

export default LoginForm
