import {
  Box,
  Button,
  FileInput,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import {
  IconBulb,
  IconCheck,
  IconChecks,
  IconUpload,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useUpdateOneUserMutation } from '../../../generated/graphql'
import useAuth from '../../../hooks/useAuth'

const UserVerification = () => {
  const { user } = useAuth()
  const router = useRouter()
  const theme = useMantineTheme()
  const [updateOneUserMutation, { loading }] = useUpdateOneUserMutation()

  const handleVerifyUser = async () => {
    try {
      const res = await updateOneUserMutation({
        variables: {
          data: {
            status: { set: 'verified' },
            did: { set: `did:chkon:${user?.id}` },
          },
          where: {
            username: user?.username,
          },
        },
      })

      if (res.data?.updateOneUser?.status === 'verified') {
        notifications.show({
          title: 'Congratulations!',
          message:
            'Your identity was verified successfully, you can now use the application.',
          icon: <IconCheck />,
          color: 'violet',
          autoClose: 5000,
        })
        router.push('/dashboard')
      }
    } catch {}
  }
  return (
    <DashboardLayout>
      <Stack
        spacing={6}
        sx={{
          maxWidth: 520,
        }}
      >
        <Text size='lg' weight='bold'>
          Chkon account verification.
        </Text>

        {user?.status === 'unverified' ? (
          <>
            <Text color='dimmed'>
              Please verify your account by providing a scanned document of your
              Passport/National-ID card
            </Text>
            <FileInput
              label='Identity Document'
              placeholder='Upload your document here'
              icon={<IconUpload size={18} />}
              variant='filled'
              accept='.pdf,.png,.jpeg,.jpg'
            />
            <Box mt={12}>
              <Button
                rightIcon={<IconCheck size={18} />}
                onClick={handleVerifyUser}
                loading={loading}
                variant='light'
              >
                Verify my account
              </Button>
            </Box>
          </>
        ) : (
          <Stack spacing={2}>
            <Group spacing={8}>
              <IconChecks color={theme.colors.green[5]} size={18} />
              <Text color='dimmed'>
                Your account was successfully verified!
              </Text>
            </Group>
            <Group spacing={8}>
              <IconBulb color={theme.colors.yellow[5]} size={18} />
              <Text color='dimmed'>
                You can now use the platform by{' '}
                <Text component={Link} href='/dashboard' underline>
                  clicking here!
                </Text>
              </Text>
            </Group>
          </Stack>
        )}
      </Stack>
    </DashboardLayout>
  )
}

export default UserVerification
