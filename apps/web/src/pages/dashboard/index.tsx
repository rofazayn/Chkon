import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import {
  IconHeartPlus,
  IconIdBadge2,
  IconLockCheck,
  IconMoodPlus,
  IconUserCheck,
  IconWorldPlus,
} from '@tabler/icons-react'
import Link from 'next/link'
import useUI from '../../hooks/useUI'
import Lottie from 'lottie-react'
import requestAnimation from '../../../public/assets/json/request.json'
import consentAnimation from '../../../public/assets/json/consent.json'
import presentAnimation from '../../../public/assets/json/present.json'
import useAuth from '../../hooks/useAuth'

const DashboardHome = () => {
  const theme = useMantineTheme()
  const { bgColor } = useUI()
  const { user } = useAuth()
  return (
    <DashboardLayout>
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Box>
          <Text weight='bold' size='lg'>
            Welcome to Chkon dashboard
          </Text>
          <Text color='dimmed' mt={-3}>
            Chkon provides identity and verifiable credentials solutions to
            Algerian citizens, get started now!
          </Text>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      {user?.status === 'unverified' && (
        <>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={12}>
              <Box>
                <Text size='md' weight='500'>
                  Verify your identity to start
                </Text>
                <Text size='sm' color='gray.6'>
                  It looks like you haven&apos;t verified your identity yet,
                  Chkon requires you to verify it first before using the
                  features we provides.
                </Text>
              </Box>
              <Box>
                <Button
                  rightIcon={<IconUserCheck size={16} />}
                  color='green'
                  size='xs'
                  variant='light'
                  component={Link}
                  href={'/dashboard/verification'}
                >
                  Verify your identity
                </Button>
              </Box>
            </Stack>
          </Box>
          <Divider variant='dashed' my={16} />
        </>
      )}

      <Box>
        <Grid>
          <Grid.Col span={3}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 360,
              }}
            >
              <Center pt={16} pb={10}>
                <Box sx={{ width: '100%', maxWidth: 130 }}>
                  <Lottie animationData={requestAnimation} />
                </Box>
              </Center>
              <Stack pt={4} mb={4} spacing={6} align='center'>
                <Text weight='500' size='md' align='center'>
                  Start filling up your wallet
                </Text>
                <Text size='sm' color='gray.6' align='center'>
                  Start filling your wallet with new digital verifiable
                  credentials that you can request from organizations.
                </Text>
                <Button
                  color='violet'
                  size='xs'
                  variant='light'
                  component={Link}
                  href={`/dashboard/issuers/`}
                  rightIcon={<IconMoodPlus size={16} />}
                  mt={12}
                  fullWidth
                  disabled={user?.status === 'unverified'}
                >
                  Request credentials
                </Button>
              </Stack>
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 360,
              }}
            >
              <Center pt={16}>
                <Box sx={{ width: '100%', maxWidth: 110 }}>
                  <Lottie animationData={consentAnimation} />
                </Box>
              </Center>

              <Stack pt={4} mb={4} spacing={6} align='center'>
                <Text weight='500' size='md' align='center'>
                  Show your consent
                </Text>
                <Text size='sm' color='gray.6' align='center'>
                  After an organization issues verifiable credentials you can
                  show your consent to that credential to start using it
                </Text>
                <Button
                  color='violet'
                  size='xs'
                  variant='light'
                  component={Link}
                  href={`/dashboard/credentials/`}
                  rightIcon={<IconHeartPlus size={16} />}
                  mt={12}
                  fullWidth
                  disabled={user?.status === 'unverified'}
                >
                  Show your consent
                </Button>
              </Stack>
            </Flex>
          </Grid.Col>
          <Grid.Col span={3}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 360,
              }}
            >
              <Center pt={16}>
                <Box sx={{ width: '100%', maxWidth: 120 }}>
                  <Lottie animationData={presentAnimation} />
                </Box>
              </Center>
              <Stack pt={4} mb={4} spacing={6} align='center'>
                <Text weight='500' size='md' align='center'>
                  Present your credentials
                </Text>
                <Text size='sm' color='gray.6' align='center'>
                  After consenting to your verifiable credentials you can start
                  presenting them to organizations
                </Text>
                <Button
                  color='violet'
                  size='xs'
                  variant='light'
                  component={Link}
                  href={`/dashboard/issuers/`}
                  rightIcon={<IconWorldPlus size={16} />}
                  mt={12}
                  fullWidth
                  disabled={user?.status === 'unverified'}
                >
                  Start presenting
                </Button>
              </Stack>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </DashboardLayout>
  )
}

export default DashboardHome
