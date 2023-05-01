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
import {
  IconAlertCircle,
  IconArrowBack,
  IconDeviceIpadHorizontalPlus,
  IconInfoCircle,
  IconLockCheck,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import {
  useCreateOneCredentialRequestMutation,
  useOrganizationQuery,
} from '../../../../generated/graphql'
import { useState } from 'react'
import useUser from '../../../../hooks/useUser'
import { notifications } from '@mantine/notifications'

const IssuerCredentialRequestPage = () => {
  const router = useRouter()
  const { user } = useUser()
  const { issuerId } = router.query
  const [selectedCredentialTypeId, setSelectedCredentialTypeId] = useState<
    string | null
  >('')
  const organizationQuery = useOrganizationQuery({
    variables: { where: { id: (issuerId as string) || undefined } },
  })
  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = organizationQuery

  const [createOneCredentialRequestMutation, { loading, error }] =
    useCreateOneCredentialRequestMutation()

  const handleRequestCredential = async () => {
    try {
      const res = await createOneCredentialRequestMutation({
        variables: {
          data: {
            credentialType: {
              connect: { id: selectedCredentialTypeId || undefined },
            },
            issuer: { connect: { id: (issuerId as string) || undefined } },
            user: { connect: { id: user?.id || undefined } },
          },
        },
      })

      if (res.data?.createOneCredentialRequest) {
        notifications.show({
          title: 'Request success!',
          message: 'You have successfully requested a credential',
          icon: <IconLockCheck />,
          color: 'green',
          autoClose: 5000,
        })
      }
      router.push('/dashboard/issuers/')
    } catch (err) {
      notifications.show({
        title: 'Request failed!',
        message: 'Something went wrong while trying to request the credential',
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
              Credential request
            </Text>

            {/* <Badge radius={6}>{orgData?.organization?.id}</Badge> */}
          </Group>

          <Text color='dimmed'>
            Choose the credential type you want then click on the Send request
            button to proceed with your request.
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
              Couldn&apos;t load organization or its allowed credential types,
              try again!
            </Alert>
          ) : orgData &&
            orgData.organization?.allowedCredentialTypes &&
            orgData.organization.allowedCredentialTypes.length > 0 ? (
            <>
              <Box sx={{ maxWidth: 520 }}>
                <Select
                  variant='filled'
                  label='Credential type'
                  placeholder='Please pick one of the available credential types'
                  data={orgData.organization.allowedCredentialTypes.map(
                    (cred): any => ({
                      label: `${cred.name} <${cred.typename}>`,
                      value: cred.id,
                    })
                  )}
                  searchable
                  maxDropdownHeight={400}
                  nothingFound='Search returned nothing'
                  description='Each credential type provides certain data about you'
                  onChange={(value) => setSelectedCredentialTypeId(value)}
                />
              </Box>
              <Box mt={12}>
                <Button
                  onClick={handleRequestCredential}
                  variant='light'
                  size='sm'
                  rightIcon={<IconDeviceIpadHorizontalPlus size={18} />}
                  loading={loading}
                >
                  Request credential
                </Button>
              </Box>
            </>
          ) : (
            <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
              This issuer is not allowed to issue any credential types at the
              moment.
            </Alert>
          )}
        </Stack>
      </Box>
    </DashboardLayout>
  )
}

export default IssuerCredentialRequestPage
