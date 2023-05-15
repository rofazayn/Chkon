import {
  Alert,
  Badge,
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Grid,
  Group,
  Loader,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { notifications } from '@mantine/notifications'
import {
  IconAlertCircle,
  IconAlertHexagon,
  IconArrowBack,
  IconBulb,
  IconCheck,
  IconChecks,
  IconUserCheck,
  IconUserExclamation,
  IconWorldCheck,
  IconWorldExclamation,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import DashboardLayout from '../../../../../../components/_layouts/dashboard-layout'
import {
  useCreateOneCredentialMutation,
  useCredentialRequestQuery,
  useCredentialTypeQuery,
  useOrganizationQuery,
  useUpdateOneCredentialRequestMutation,
  useUserQuery,
} from '../../../../../../generated/graphql'
import useUI from '../../../../../../hooks/useUI'
import useAuth from '../../../../../../hooks/useAuth'

const OrgCredentialRequestHandle = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()
  const { bgColor } = useUI()
  const theme = useMantineTheme()
  const { orgId, reqId } = router.query
  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = useOrganizationQuery({
    variables: { where: { id: (orgId as string) || undefined } },
    fetchPolicy: 'network-only',
  })
  const {
    data: credReqData,
    loading: credReqLoading,
    error: credReqError,
  } = useCredentialRequestQuery({
    variables: { where: { id: (reqId as string) || undefined } },
    fetchPolicy: 'network-only',
    skip: !orgData,
  })
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useUserQuery({
    variables: { where: { id: credReqData?.credentialRequest?.userId } },
    fetchPolicy: 'network-only',
    skip: !credReqData,
  })
  const {
    data: credTypeData,
    loading: credTypeLoading,
    error: credTypeError,
  } = useCredentialTypeQuery({
    variables: {
      where: {
        id:
          (credReqData?.credentialRequest?.credentialTypeId as string) ||
          undefined,
      },
    },
    fetchPolicy: 'network-only',
    skip: !userData,
  })

  const [credValues, setCredValues] = useState<any>({})

  const [createOneCredentialMutation] = useCreateOneCredentialMutation()
  const [updateOneCredentialRequestMutation] =
    useUpdateOneCredentialRequestMutation()
  const [loading, setLoading] = useState<boolean>(false)

  async function handleIssueCredential() {
    try {
      setLoading(true)
      const res = await createOneCredentialMutation({
        variables: {
          data: {
            user: {
              connect: { id: (userData?.user?.id as string) || undefined },
            },
            issuer: {
              connect: {
                id:
                  (orgData?.organization?.id as string) ||
                  (orgId as string) ||
                  undefined,
              },
            },
            type: {
              connect: {
                id: (credTypeData?.credentialType?.id as string) || undefined,
              },
            },
            request: {
              connect: {
                id: (credReqData?.credentialRequest?.id as string) || undefined,
              },
            },
            payload: credValues,
            expiryDate: credValues.expiresAt,
            issuerConsent: true,
          },
        },
      })
      if (res.data?.createOneCredential) {
        const updateReq = await updateOneCredentialRequestMutation({
          variables: {
            data: {
              status: { set: 'fulfilled' },
            },
            where: {
              id: (credReqData?.credentialRequest?.id as string) || undefined,
            },
          },
        })
        if (updateReq.data) {
          setLoading(false)
          notifications.show({
            title: 'Success!',
            message: `You have successfully issued a credential of type <${credTypeData?.credentialType?.typename}> to the target user`,
            icon: <IconCheck />,
            color: 'violet',
            autoClose: 5000,
          })

          router.push(`/dashboard/organizations/${orgId}/requests/pending`)
        } else {
          setLoading(false)
          notifications.show({
            title: 'Request update filled',
            message:
              'Something went wrong while trying to update the credential request',
            icon: <IconBulb />,
            color: 'yellow',
            autoClose: 5000,
          })
          router.push(`/dashboard/organizations/${orgId}/requests/pending`)
        }
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      notifications.show({
        title: 'Credential issuance failed!',
        message:
          'Something went wrong while trying to request issue this credential!',
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
            <Text weight='bold' size='lg'>
              Handle credential request
            </Text>
            <Badge radius={6}>{reqId}</Badge>
          </Group>

          <Text color='dimmed'>
            You can now fill in the credential attributes required by this
            request, then issue it back to the requesting user.
          </Text>
        </Box>

        <Box>
          <Button
            component={Link}
            href={`/dashboard/organizations/${orgId}/requests/pending/`}
            rightIcon={<IconArrowBack size={18} />}
            variant='light'
            color='gray'
          >
            Go back
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid>
          <Grid.Col span={3}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 180,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {orgLoading ? (
                <Loader size='sm' />
              ) : orgError ? (
                <Alert color='red'>
                  Something went wrong while trying to fetch the organization
                </Alert>
              ) : (
                <>
                  <Stack
                    spacing={4}
                    sx={{
                      maxHeight: 100,
                      overflow: 'hidden',
                    }}
                  >
                    <Flex
                      sx={{
                        flexDirection: 'row',
                        gap: 8,
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Text weight='bold' size='md'>
                          Issuing Organization
                        </Text>
                      </Box>
                      <Box>
                        {orgData?.organization?.status === 'verified' ? (
                          <IconWorldCheck
                            size={20}
                            color={theme.colors.green[5]}
                          />
                        ) : (
                          <IconWorldExclamation
                            size={20}
                            color={theme.colors.orange[5]}
                          />
                        )}
                      </Box>
                    </Flex>

                    <Stack spacing={0}>
                      <Text size='sm' weight='500'>
                        {orgData?.organization?.name}
                      </Text>
                      <Box>
                        <Code>{orgData?.organization?.id}</Code>
                      </Box>
                    </Stack>
                  </Stack>
                  <Box mt={12}>
                    <Group spacing={8}>
                      <Text color='green.6' size='sm' weight='500'>
                        Organization is verified
                      </Text>
                    </Group>
                  </Box>
                </>
              )}
            </Flex>
          </Grid.Col>

          {orgData?.organization && (
            <Grid.Col span={3}>
              <Flex
                sx={{
                  width: '100%',
                  backgroundColor: bgColor,
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {credReqLoading ? (
                  <Loader size='sm' />
                ) : credReqError ? (
                  <Alert color='red'>
                    Something went wrong while trying to fetch the credential
                    request
                  </Alert>
                ) : (
                  <>
                    <Stack
                      spacing={4}
                      sx={{
                        maxHeight: 100,
                        overflow: 'hidden',
                      }}
                    >
                      <Flex
                        sx={{
                          flexDirection: 'row',
                          gap: 8,
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Text weight='bold' size='md'>
                            Credential Request
                          </Text>
                        </Box>
                        <Box>
                          {credReqData?.credentialRequest?.status ===
                          'pending' ? (
                            <IconCheck
                              size={20}
                              color={theme.colors.green[5]}
                            />
                          ) : (
                            <IconAlertHexagon
                              size={20}
                              color={theme.colors.orange[5]}
                            />
                          )}
                        </Box>
                      </Flex>

                      <Stack spacing={0}>
                        <Text size='sm' weight='500'>
                          Status{' '}
                          <Text component='span' color='orange.6'>
                            {credReqData?.credentialRequest?.status.toUpperCase()}
                          </Text>
                        </Text>
                        <Box>
                          <Code>{credReqData?.credentialRequest?.id}</Code>
                        </Box>
                      </Stack>
                    </Stack>
                    <Box mt={12}>
                      <Group spacing={8}>
                        <Text color='green.6' size='sm' weight='500'>
                          Request is valid
                        </Text>
                      </Group>
                    </Box>
                  </>
                )}
              </Flex>
            </Grid.Col>
          )}

          {credReqData?.credentialRequest && (
            <Grid.Col span={3}>
              <Flex
                sx={{
                  width: '100%',
                  backgroundColor: bgColor,
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {userLoading ? (
                  <Loader size='sm' />
                ) : userError ? (
                  <Alert color='red'>
                    Something went wrong while trying to fetch the requesting
                    user
                  </Alert>
                ) : (
                  <>
                    <Stack
                      spacing={4}
                      sx={{
                        maxHeight: 100,
                        overflow: 'hidden',
                      }}
                    >
                      <Flex
                        sx={{
                          flexDirection: 'row',
                          gap: 8,
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Text weight='bold' size='md'>
                            Credential Requester
                          </Text>
                        </Box>
                        <Box>
                          {userData?.user?.status === 'verified' ? (
                            <IconUserCheck
                              size={20}
                              color={theme.colors.green[5]}
                            />
                          ) : (
                            <IconUserExclamation
                              size={20}
                              color={theme.colors.orange[5]}
                            />
                          )}
                        </Box>
                      </Flex>
                      <Stack spacing={0}>
                        <Text size='sm' weight='500'>
                          {userData?.user?.name}
                        </Text>
                        <Box>
                          <Code>{userData?.user?.email}</Code>
                        </Box>
                      </Stack>
                    </Stack>
                    <Box mt={12}>
                      <Group spacing={8}>
                        <Text
                          color={
                            userData?.user?.status === 'verified'
                              ? 'green.6'
                              : 'orange.6'
                          }
                          size='sm'
                          weight='500'
                        >
                          {userData?.user?.status === 'verified'
                            ? 'User is verified'
                            : 'User is not verified'}
                        </Text>
                      </Group>
                    </Box>
                  </>
                )}
              </Flex>
            </Grid.Col>
          )}

          {userData?.user && (
            <Grid.Col span={3}>
              <Flex
                sx={{
                  width: '100%',
                  backgroundColor: bgColor,
                  padding: 16,
                  borderRadius: 12,
                  height: 180,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {credTypeLoading ? (
                  <Loader size='sm' />
                ) : credTypeError ? (
                  <Alert color='red'>
                    Something went wrong while trying to fetch the credential
                    type
                  </Alert>
                ) : (
                  <>
                    <Stack
                      spacing={4}
                      sx={{
                        maxHeight: 100,
                        overflow: 'hidden',
                      }}
                    >
                      <Flex
                        sx={{
                          flexDirection: 'row',
                          gap: 8,
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Text weight='bold' size='md'>
                            Credential Type
                          </Text>
                        </Box>
                        <Box>
                          {credTypeData?.credentialType &&
                          orgData?.organization?.allowedCredentialTypesIds.includes(
                            credTypeData?.credentialType?.id
                          ) ? (
                            <IconChecks
                              size={20}
                              color={theme.colors.green[5]}
                            />
                          ) : (
                            <IconAlertCircle
                              size={20}
                              color={theme.colors.red[5]}
                            />
                          )}
                        </Box>
                      </Flex>

                      <Stack spacing={0}>
                        <Text size='sm' weight='500'>
                          {credTypeData?.credentialType?.name}
                        </Text>
                        <Box>
                          <Code>{credTypeData?.credentialType?.typename}</Code>
                        </Box>
                      </Stack>
                    </Stack>
                    <Box mt={12}>
                      <Group spacing={8}>
                        {credTypeData?.credentialType &&
                        orgData?.organization?.allowedCredentialTypesIds.includes(
                          credTypeData?.credentialType?.id
                        ) ? (
                          <Text color='green.6' size='sm' weight='500'>
                            Allowed credential type
                          </Text>
                        ) : (
                          <Text color='red.6' size='sm' weight='500'>
                            Credential type not allowed!
                          </Text>
                        )}
                      </Group>
                    </Box>
                  </>
                )}
              </Flex>
            </Grid.Col>
          )}
        </Grid>
        {orgData &&
          credReqData &&
          userData &&
          credTypeData &&
          orgData?.organization?.allowedCredentialTypesIds.includes(
            credTypeData.credentialType!.id
          ) && (
            <>
              <Divider variant='dashed' my={24} />
              <Flex
                sx={{
                  flexDirection: 'column',
                  width: '100%',
                  gap: 24,
                }}
              >
                <Grid gutter={32}>
                  {credTypeData.credentialType?.attributes.map((attr) => (
                    <Grid.Col span={4} key={attr.name}>
                      {attr.inputType === 'text' ? (
                        <TextInput
                          label={attr.label}
                          name={attr.name}
                          placeholder={`Enter ${attr.label.toLowerCase()} here`}
                          description={`This field is reserved for ${attr.label.toLowerCase()}`}
                          onChange={(e) => {
                            let val = e.target.value
                            let newValues = credValues
                            newValues[attr.name] = val
                            setCredValues({ ...newValues })
                          }}
                          variant='filled'
                          required
                        />
                      ) : attr.inputType === 'date' ? (
                        <DateInput
                          label={attr.label}
                          name={attr.name}
                          placeholder={`Enter ${attr.label.toLowerCase()} here`}
                          description={`This field is reserved for ${attr.label.toLowerCase()}`}
                          onChange={(value) => {
                            let newValues = credValues
                            newValues[attr.name] = value
                            setCredValues({ ...newValues })
                          }}
                          variant='filled'
                          required
                        />
                      ) : (
                        <TextInput
                          label={attr.label}
                          name={attr.name}
                          placeholder={`Enter ${attr.label.toLowerCase()} here`}
                          description={`This field is reserved for ${attr.label.toLowerCase()}`}
                          onChange={(e) => {
                            let val = e.target.value
                            let newValues = credValues
                            newValues[attr.name] = val
                            setCredValues({ ...newValues })
                          }}
                          variant='filled'
                          required
                        />
                      )}
                    </Grid.Col>
                  ))}
                </Grid>
                <Divider variant='dashed' />
                <Box sx={{ maxWidth: 420 }}>
                  <Stack spacing={12}>
                    <Text color='gray.6' size='sm'>
                      When you are done verifying the data you entered, press on
                      the confirm issue credential button to continue
                    </Text>
                    <Box>
                      <Button
                        rightIcon={<IconCheck size={18} />}
                        variant='light'
                        onClick={handleIssueCredential}
                        loading={loading}
                      >
                        Confirm credential issuance
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
            </>
          )}
      </Box>
    </DashboardLayout>
  )
}

export default OrgCredentialRequestHandle
