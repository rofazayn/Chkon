import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Loader,
  Select,
  Stack,
  Text,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import {
  IconAlertCircle,
  IconArrowBack,
  IconDeviceIpadHorizontalPlus,
  IconInfoCircle,
  IconLockCheck,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import {
  useCreateOnePresentationMutation,
  useCredentialsQuery,
  useOrganizationQuery,
} from '../../../../generated/graphql'
import useAuth from '../../../../hooks/useAuth'

const IssuerCredentialPresentationPage = () => {
  const router = useRouter()
  const { user } = useAuth()
  const { issuerId } = router.query
  const [selectedCredentialId, setSelectedCredentialId] = useState<
    string | null
  >('')
  const organizationQuery = useOrganizationQuery({
    variables: { where: { id: (issuerId as string) || undefined } },
    fetchPolicy: 'network-only',
  })
  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = organizationQuery

  const [createOnePresentationMutation, { loading, error }] =
    useCreateOnePresentationMutation()

  const {
    data: credentialsData,
    loading: credentialsLoading,
    error: credentialsError,
  } = useCredentialsQuery({
    variables: {
      where: {
        userId: { equals: user?.id },
      },
    },
    pollInterval: 5000,
  })

  const handlePresentCredential = async () => {
    try {
      const res = await createOnePresentationMutation({
        variables: {
          data: {
            credential: {
              connect: { id: selectedCredentialId || undefined },
            },
            organization: {
              connect: { id: orgData?.organization?.id || undefined },
            },
            user: {
              connect: {
                id: user?.id || undefined,
              },
            },
            holderConsent: true,
            isPublic: false,
            allowedAccess: { set: [orgData?.organization?.id as string] },
          },
        },
      })

      if (res.data?.createOnePresentation) {
        notifications.show({
          title: 'Presentation success!',
          message: 'You have successfully presented a credential',
          icon: <IconLockCheck />,
          color: 'green',
          autoClose: 5000,
        })
      }
      router.push('/dashboard/issuers/')
    } catch (err) {
      notifications.show({
        title: 'Request failed!',
        message: 'Something went wrong while trying to present the credential',
        icon: <IconAlertCircle />,
        color: 'red',
        autoClose: 5000,
      })
    }
  }

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
          <Group spacing={8} align='center'>
            <Text size='lg' weight='bold'>
              Present credential
            </Text>

            {/* <Badge radius={6}>{orgData?.organization?.id}</Badge> */}
          </Group>

          <Text color='dimmed'>
            Choose the credential you want to present then click on the present
            credential button to proceed with your request.
          </Text>
        </Box>

        <Box>
          <Button
            component={Link}
            href={`/dashboard/issuers/`}
            rightIcon={<IconArrowBack size={18} />}
            variant='light'
            color='gray'
          >
            Go back
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={0}>
          {/* <Text>Choose the credential type you would like to request</Text> */}
          {orgLoading ? (
            <Loader size='sm' />
          ) : orgError ? (
            <Alert icon={<IconInfoCircle size={18} />} color='red'>
              Couldn&apos;t load organization or you don&apos;t have any
              credentials to present, please try again!
            </Alert>
          ) : orgData &&
            credentialsData?.credentials &&
            credentialsData?.credentials.length > 0 ? (
            <>
              <Box sx={{ maxWidth: 520 }}>
                <Select
                  variant='filled'
                  label='Credential'
                  placeholder='Please pick one of the available credential'
                  data={credentialsData?.credentials.map((cred): any => ({
                    label: `${cred.type.name} <${cred.type.typename}> from ${cred.issuer.name}`,
                    description: `from ${cred.issuer.name}`,
                    value: cred.id,
                  }))}
                  searchable
                  maxDropdownHeight={400}
                  nothingFound='Search returned nothing'
                  description='Choose the credential to present carefully'
                  onChange={(value) => setSelectedCredentialId(value)}
                />
              </Box>
              <Box mt={12}>
                <Button
                  onClick={handlePresentCredential}
                  variant='light'
                  size='sm'
                  rightIcon={<IconDeviceIpadHorizontalPlus size={18} />}
                  loading={loading}
                >
                  Present credential
                </Button>
              </Box>
            </>
          ) : (
            <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
              It looks like you don&apos;t have any verifiable credentials to
              present.
            </Alert>
          )}
        </Stack>
      </Box>
    </DashboardLayout>
  )
}

export default IssuerCredentialPresentationPage
