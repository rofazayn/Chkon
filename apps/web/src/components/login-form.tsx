import {
  Container,
  Center,
  Flex,
  Stack,
  TextInput,
  Anchor,
  PasswordInput,
  Button,
  Box,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconLogin } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  const theme = useMantineTheme()
  return (
    <Box w='100%'>
      <Container size='xs'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
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
              <Flex direction={'row'} align='center' gap={16} mb={24}>
                <Box>
                  <Image
                    src={'/assets/png/logo.png'}
                    alt='chkon logo'
                    width='64'
                    height='64'
                  />
                </Box>
                <Flex direction='column'>
                  <Text size='xl' weight='bold' mb={-6}>
                    Chkon: E-ID
                  </Text>
                  <Text color='dimmed'>Identity made simple.</Text>
                </Flex>
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
                />
                <PasswordInput
                  required
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
                />
              </Stack>

              <Stack mt={32}>
                <Button size='md' fullWidth rightIcon={<IconLogin />}>
                  Connect to my Account
                </Button>
              </Stack>
            </Box>
          </Center>
          <Center mt={8}>
            <Text color='dimmed' size='sm'>
              No Chkon account?{' '}
              <Anchor
                component={Link}
                href='/register'
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
