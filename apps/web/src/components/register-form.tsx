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
  IconFingerprint,
  IconHash,
  IconLock,
  IconUser,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const RegisterForm = () => {
  const theme = useMantineTheme()
  return (
    <Box w='100%'>
      <Container size='xs'>
        <motion.div
          initial={{ scale: 0.75 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.75 }}
          key='register-form'
        >
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
                    <Text color='dimmed'>Create a new account.</Text>
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
                  placeholder='Enter your full name'
                  label='Full Name'
                  variant='filled'
                  description={
                    <Text component='span'>
                      You must enter your legal real name
                    </Text>
                  }
                  rightSection={<IconUser size={20} style={{ opacity: 0.3 }} />}
                />
                <TextInput
                  required
                  withAsterisk={false}
                  type='text'
                  placeholder='Choose a username'
                  label='Username'
                  variant='filled'
                  description={
                    <Text component='span'>
                      You will use this to login later
                    </Text>
                  }
                  rightSection={<IconHash size={20} style={{ opacity: 0.3 }} />}
                />
                <TextInput
                  required
                  type='password'
                  withAsterisk={false}
                  placeholder='Choose a password'
                  label='Password'
                  variant='filled'
                  description={
                    <Text component='span'>
                      Must include digits and special characters
                    </Text>
                  }
                  rightSection={<IconLock size={20} style={{ opacity: 0.3 }} />}
                />
              </Stack>

              <Stack spacing={16} mt={24}>
                <Button
                  fullWidth
                  sx={{
                    paddingInline: 16,
                    minHeight: 48,
                    '& > div': {
                      display: 'flex',
                      justifyContent: 'space-between',
                    },
                  }}
                  rightIcon={<IconFingerprint />}
                >
                  Create your account
                </Button>
              </Stack>
            </Box>
          </Center>
          <Center mt={12}>
            <Text size='sm' sx={{ opacity: 0.6 }}>
              You already have an account?{' '}
              <Anchor
                component={Link}
                href='/auth/login'
                color='none'
                weight='bold'
              >
                Login
              </Anchor>
            </Text>
          </Center>
        </motion.div>
      </Container>
    </Box>
  )
}

export default RegisterForm
