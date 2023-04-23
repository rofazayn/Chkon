import {
  Box,
  Button,
  FileInput,
  Group,
  Stack,
  Text,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import {
  IconBulb,
  IconCheck,
  IconChecks,
  IconUpload,
} from '@tabler/icons-react'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useUpdateOneUserMutation } from '../../../generated/graphql'
import useUser from '../../../hooks/useUser'
import Link from 'next/link'

const UserVerification = () => {
  const { user } = useUser()
  const theme = useMantineTheme()
  const [updateOneUserMutation, { loading }] = useUpdateOneUserMutation()

  const handleVerifyUser = async () => {
    try {
      const res = await updateOneUserMutation({
        variables: {
          data: {
            verified: { set: true },
          },
          where: {
            username: user.username,
          },
        },
      })

      if (res.data?.updateOneUser?.verified) {
        notifications.show({
          title: 'Congratulations!',
          message:
            'Your identity was verified successfully, you can now use the application.',
          icon: <IconCheck />,
          color: 'green',
          autoClose: 5000,
        })
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

        {!user?.verified ? (
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
            <Box mt={16}>
              <Button
                rightIcon={<IconCheck size={18} />}
                onClick={handleVerifyUser}
                loading={loading}
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
