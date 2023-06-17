import {
  Box,
  Button,
  Divider,
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
import Webcam from 'react-webcam'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useUpdateOneUserMutation } from '../../../generated/graphql'
import useAuth from '../../../hooks/useAuth'
import { useState } from 'react'
const WebcamComponent = () => (
  <Webcam
    mirrored={true}
    style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}
  />
)

const UserVerification = () => {
  const { user } = useAuth()
  const router = useRouter()
  const theme = useMantineTheme()
  const [updateOneUserMutation, { loading }] = useUpdateOneUserMutation()
  const [fileChanged, setFileChanged] = useState<boolean>(false)

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
          maxWidth: 640,
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
            <Divider variant='dashed' my={8} />
            <Stack spacing={0}>
              <Text size='xs' color='dimmed'>
                1 - Step One: Identity Documents
              </Text>
              <FileInput
                label='Identity Document'
                placeholder='Upload your document here'
                icon={<IconUpload size={18} />}
                variant='filled'
                accept='.pdf,.png,.jpeg,.jpg'
                onChange={() => setFileChanged(true)}
              />
            </Stack>
            {fileChanged && (
              <Box mt={12}>
                <Text size='xs' color='dimmed' mb={6}>
                  2 - Step Two: Biometrics Verification
                </Text>

                <WebcamComponent />
              </Box>
            )}
            <Box mt={12}>
              <Button
                rightIcon={<IconCheck size={18} />}
                onClick={handleVerifyUser}
                loading={loading}
                disabled={!fileChanged}
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
