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
  Tooltip,
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
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key='login-form'
        >
          <Center>
            <Box
              sx={{
                width: '100%',
                maxWidth: 440,
                borderRadius: 16,
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
                padding: 32,
                paddingBottom: 40,
              }}
            >
              <Flex
                direction={'row'}
                align='center'
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
                  <Tooltip
                    withArrow
                    label='Go back home'
                    color='gray'
                    position='bottom'
                    arrowSize={8}
                  >
                    <ActionIcon
                      variant='subtle'
                      size='xl'
                      component={Link}
                      href='/'
                    >
                      <IconArrowBack size={24} style={{ opacity: 0.3 }} />
                    </ActionIcon>
                  </Tooltip>
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
                  size='md'
                  fullWidth
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
          <Center mt={8}>
            <Text color='dimmed' size='sm'>
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
        </motion.div>
      </Container>
    </Box>
  )
}

export default LoginForm
