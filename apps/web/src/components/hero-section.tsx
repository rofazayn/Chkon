import logoImage from '@/../public/assets/png/logo.png'
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconExternalLink,
  IconFingerprint,
  IconLogin,
  IconRocket,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'

const HeroSection = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { isAuthenticated, isCheckingAuth } = useAuth()
  const { user, authStatus } = useAuth()
  return (
    <Container size='xs'>
      <Box py={64}>
        <Box mb={16}>
          <Image
            src={logoImage}
            alt='chkon logo'
            width='64'
            height='64'
            placeholder='blur'
          />
        </Box>
        <Box mb={12}>
          <Badge
            radius={4}
            color='orange'
            sx={{ textTransform: 'none', paddingInline: 6 }}
          >
            Test Release v0.0.1-alpha
          </Badge>
        </Box>

        <Title order={1}>Chkon D-ID: Empowering Digital Identity.</Title>

        <Text
          mt={12}
          size='lg'
          sx={(theme) => ({
            lineHeight: 1.66,
          })}
          color='gray.6'
        >
          Experience the future of secure and seamless digital identity
          management with Chkon. Unleash the potential of self-sovereign
          identity, all at your fingertips.
        </Text>

        <Text mt={16}>
          Introducing Chkon, a groundbreaking hybrid solution designed to
          transform digital identity management. Our platform offers users a
          secure and user-friendly way to manage their digital identities while
          maintaining a balance between the strengths of decentralization and
          the practicality of modern solutions. Chkon enables users to
          seamlessly request verifiable credentials from issuers and share them
          securely with verifiers. By leveraging a hybrid approach, Chkon merges
          the advantages of decentralized identity management with innovative
          techniques to minimize the risk of data breaches and enhance user
          privacy. Discover the perfect blend of convenience and security with
          Chkon as we reshape the future of digital identity management.
        </Text>
        {authStatus === 'stale' ? (
          <Box mt={32}>
            <Button
              // component={Link}
              // href='/auth/register'
              loading
              // // loaderPosition='left'
              // leftIcon={<IconFingerprint />}
            >
              Performing checks...
            </Button>
          </Box>
        ) : authStatus === 'yes' && user ? (
          <Box mt={32}>
            <Button
              component={Link}
              href='/dashboard'
              rightIcon={<IconRocket />}
            >
              Navigate to dashboard
            </Button>
          </Box>
        ) : (
          <Group spacing={16} mt={32}>
            <Button
              component={Link}
              href='/auth/register'
              leftIcon={<IconFingerprint />}
            >
              Create an account
            </Button>
            <Text component='span' size='sm' color='dimmed'>
              or
            </Text>
            <Button
              component={Link}
              href='/auth/login'
              variant='light'
              rightIcon={<IconLogin />}
            >
              Connect to Chkon
            </Button>
          </Group>
        )}
        <Divider mt={80} mb={24} maw={120} />
        <Stack spacing={0}>
          <Text size='sm'>
            Credits to{' '}
            <Anchor
              color='none'
              href='https://github.com/rofazayn'
              target='_blank'
              weight='500'
            >
              Abderraouf Zine <IconExternalLink size={12} />
            </Anchor>
          </Text>
          <Text size='sm'>
            Learn more by visiting our{' '}
            <Anchor
              href='https://github.com/AuresX'
              target='_blank'
              weight='500'
              color='none'
            >
              GitHub page <IconExternalLink size={12} />
            </Anchor>
          </Text>
          <Group spacing={4}>
            <Text size='sm'>Change the color scheme</Text>
            <Button
              variant='subtle'
              color={colorScheme === 'dark' ? 'violet' : 'gray'}
              size='sm'
              sx={{ padding: 0, height: 'auto' }}
              onClick={() => toggleColorScheme()}
            >
              Dark
            </Button>
            <Text size='sm'>/</Text>
            <Button
              variant='light'
              color={colorScheme === 'light' ? 'violet' : 'gray'}
              size='sm'
              sx={{ padding: 0, height: 'auto' }}
              onClick={() => toggleColorScheme()}
            >
              Light
            </Button>
          </Group>
        </Stack>
      </Box>
    </Container>
  )
}

export default HeroSection
