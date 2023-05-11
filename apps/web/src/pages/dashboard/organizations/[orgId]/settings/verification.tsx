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
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import {
  useOrganizationQuery,
  useUpdateOneOrganizationMutation,
} from '../../../../../generated/graphql'

const UserVerification = () => {
  const router = useRouter()
  const theme = useMantineTheme()
  const [updateOneOrganizationMutation, { loading }] =
    useUpdateOneOrganizationMutation()
  const { orgId } = router.query

  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = useOrganizationQuery({
    variables: { where: { id: orgId as string } },
  })

  const handleVerifyUser = async () => {
    try {
      const res = await updateOneOrganizationMutation({
        variables: {
          data: {
            status: { set: 'verified' },
            did: { set: `did:chkon:${orgData?.organization?.id}` },
          },
          where: {
            id: (orgData?.organization?.id as string) || undefined,
          },
        },
      })

      if (res.data?.updateOneOrganization?.status === 'verified') {
        notifications.show({
          title: 'Congratulations!',
          message:
            'Your organization was verified successfully, you can now use the application.',
          icon: <IconCheck />,
          color: 'violet',
          autoClose: 5000,
        })
        router.push('/dashboard/organizations')
      }
    } catch {
      notifications.show({
        title: 'Failure!',
        message:
          'Something went wrong while trying to verify your organization, please try again',
        icon: <IconCheck />,
        color: 'violet',
        autoClose: 5000,
      })
    }
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
          Chkon organization verification.
        </Text>

        {orgData?.organization?.status !== 'verified' ? (
          <>
            <Text color='dimmed'>
              Please verify your organization by providing a scanned document(s)
              that prove your authority.
            </Text>
            <FileInput
              label='Proof Document(s)'
              placeholder='Upload your document(s) here'
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
                Verify the organization
              </Button>
            </Box>
          </>
        ) : (
          <Stack spacing={2}>
            <Group spacing={8}>
              <IconChecks color={theme.colors.green[5]} size={18} />
              <Text color='dimmed'>
                Your organization was successfully verified!
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
