import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Flex,
  PasswordInput,
  Popover,
  Progress,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import {
  IconArrowBack,
  IconEye,
  IconEyeOff,
  IconFingerprint,
  IconHash,
  IconLock,
  IconMail,
  IconUser,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import PasswordRequirement, {
  getStrength,
  requirements,
} from './password-requirement'
import { Formik } from 'formik'
import { setAccessToken, setRefreshToken } from '../utils/jwt-operations'
import { useRouter } from 'next/router'
import { useRegisterMutation } from '../generated/graphql'

const RegisterForm = () => {
  const theme = useMantineTheme()

  const [popoverOpened, setPopoverOpened] = useState(false)
  const [value, setValue] = useState('')
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ))
  const strength = getStrength(value)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'
  const router = useRouter()
  const [registerMutation] = useRegisterMutation()

  return (
    <Box w='100%'>
      <Container size='xs'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            username: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const { name, email, username, password } = values
            try {
              const loginResponse = await registerMutation({
                variables: {
                  name,
                  email,
                  username,
                  password,
                },
              })

              if (loginResponse.data?.register) {
                const { accessToken, refreshToken } =
                  loginResponse.data.register
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                router.replace('/dashboard')
              }
            } catch (error) {
              console.log(error)
            }
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Center>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 440,
                    borderRadius: 6,
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[8]
                        : 'white',

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
                        <IconArrowBack size={24} style={{ opacity: 0.5 }} />
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
                      icon={<IconUser size={18} opacity={0.7} />}
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextInput
                      required
                      withAsterisk={false}
                      type='email'
                      placeholder="What's your email"
                      label='Email'
                      variant='filled'
                      description={
                        <Text component='span'>
                          We need this to verify your account
                        </Text>
                      }
                      icon={<IconMail size={18} opacity={0.7} />}
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                          You will use this to login from now on
                        </Text>
                      }
                      icon={<IconHash size={18} opacity={0.7} />}
                      name='username'
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Popover
                      opened={popoverOpened && strength !== 100}
                      position='bottom'
                      width='target'
                      transitionProps={{
                        transition: 'fade',
                        exitDuration: 600,
                        duration: 300,
                      }}
                      shadow='xl'
                    >
                      <Popover.Target>
                        <div
                          onFocusCapture={() => setPopoverOpened(true)}
                          onBlurCapture={() => setPopoverOpened(false)}
                        >
                          <PasswordInput
                            required
                            withAsterisk={false}
                            placeholder='Choose a password'
                            label='Password'
                            variant='filled'
                            description={
                              <Text component='span'>
                                Must include digits and special characters
                              </Text>
                            }
                            visibilityToggleIcon={({ reveal, size }) =>
                              reveal ? (
                                <IconEyeOff
                                  size={18}
                                  style={{ opacity: 0.8 }}
                                />
                              ) : (
                                <IconEye size={18} style={{ opacity: 0.8 }} />
                              )
                            }
                            icon={<IconLock size={18} opacity={0.7} />}
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </Popover.Target>
                      <Popover.Dropdown
                        sx={{
                          border: 'none',
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[7]
                              : 'white',
                        }}
                      >
                        <Progress
                          color={color}
                          value={strength}
                          size={8}
                          mb='sm'
                          radius='xs'
                        />
                        <PasswordRequirement
                          label='Includes at least 6 characters'
                          meets={value.length > 5}
                        />
                        {checks}
                      </Popover.Dropdown>
                    </Popover>
                  </Stack>

                  <Stack spacing={16} mt={24}>
                    <Button
                      fullWidth
                      loaderProps={{
                        size: 'sm',
                      }}
                      sx={{
                        paddingInline: 16,
                        minHeight: 48,
                        '& > div': {
                          display: 'flex',
                          justifyContent: 'space-between',
                        },
                      }}
                      rightIcon={<IconFingerprint />}
                      type='submit'
                      loading={isSubmitting}
                    >
                      Create your account
                    </Button>
                  </Stack>
                </Box>
              </Center>
              <Center mt={12}>
                <Text size='sm' sx={{ opacity: 0.5 }}>
                  You already have an account?{' '}
                  <Anchor
                    component={Link}
                    href='/auth/login'
                    color='none'
                    weight='bold'
                    replace
                  >
                    Login
                  </Anchor>
                </Text>
              </Center>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  )
}

export default RegisterForm
