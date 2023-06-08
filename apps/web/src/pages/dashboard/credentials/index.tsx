import logoImage from '@/../public/assets/png/chip.png'
import {
  Accordion,
  ActionIcon,
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Loader,
  Modal,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { Prism } from '@mantine/prism'
import { IconCheck, IconSearch, IconSeeding, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import {
  useCredentialsQuery,
  useUpdateOneCredentialMutation,
} from '../../../generated/graphql'
import useUI from '../../../hooks/useUI'
import useAuth from '../../../hooks/useAuth'
import humanizeDate from '../../../utils/humanize-date'

const VerifiableCredentialsHome = () => {
  const theme = useMantineTheme()
  const { user } = useAuth()
  const consentedCredentialsQuery = useCredentialsQuery({
    variables: {
      where: {
        userId: { equals: (user?.id as string) || undefined },
        holderConsent: { equals: true },
        issuerConsent: { equals: true },
      },
    },
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  const unconsentedCredentialsQuery = useCredentialsQuery({
    variables: {
      where: {
        userId: { equals: (user?.id as string) || undefined },
        holderConsent: { equals: false },
        issuerConsent: { equals: true },
      },
    },
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  const { bgColor } = useUI()
  const [updateOneCredentialMutation, { loading }] =
    useUpdateOneCredentialMutation()
  const handleConsent = async (credId: string | null) => {
    try {
      if (!credId) return
      const res = await updateOneCredentialMutation({
        variables: {
          data: {
            holderConsent: { set: true },
          },
          where: { id: credId || undefined },
        },
      })
      if (res.data?.updateOneCredential?.holderConsent) {
        notifications.show({
          title: 'Success!',
          message: `You have successfully consented to this credential`,
          icon: <IconCheck />,
          color: 'violet',
          autoClose: 5000,
        })
        await consentedCredentialsQuery.refetch()
        await unconsentedCredentialsQuery.refetch()
      }
    } catch (error) {
      notifications.show({
        title: 'Consent failed!',
        message: `Something went wrong while trying to update the credential`,
        icon: <IconCheck />,
        color: 'red',
        autoClose: 5000,
      })
    }
  }

  const [searchField, setSearchField] = useState<string>('')
  const [conCreds, setConCreds] = useState<any>([])
  const [unconCreds, setUnconCreds] = useState<any>([])
  useEffect(() => {
    if (
      searchField &&
      consentedCredentialsQuery.data &&
      unconsentedCredentialsQuery.data
    ) {
      let newConCreds = consentedCredentialsQuery.data.credentials.filter(
        (credential: any) =>
          credential.issuer.name
            .toLowerCase()
            .includes(searchField.toLowerCase().trim()) ||
          credential.type.name
            .toLowerCase()
            .includes(searchField.toLowerCase().trim())
      )
      if (newConCreds) {
        setConCreds(newConCreds)
      }
      let newUnconCreds = unconsentedCredentialsQuery.data.credentials.filter(
        (credential: any) =>
          credential.issuer.name
            .toLowerCase()
            .includes(searchField.toLowerCase().trim()) ||
          credential.type.name
            .toLowerCase()
            .includes(searchField.toLowerCase().trim())
      )
      if (newUnconCreds) {
        setUnconCreds(newUnconCreds)
      }
    }
  }, [
    searchField,
    consentedCredentialsQuery.data,
    unconsentedCredentialsQuery.data,
  ])

  const [opened, { open, close }] = useDisclosure(false)
  const [selectedCredential, setSelectedCredential] = useState<any>(null)

  return (
    <DashboardLayout>
      {user ? (
        <>
          {selectedCredential && (
            <Modal
              opened={opened}
              onClose={close}
              // title='Credential details'
              size='xl'
              centered
              lockScroll
              withCloseButton={false}
              radius={16}
              padding={32}
            >
              <Grid>
                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Credential type
                    </Text>
                    <Text size='md'>{selectedCredential?.type.name}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Credential holder
                    </Text>
                    <Text size='md'>{selectedCredential?.user.name}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Holder consent
                    </Text>
                    <Text
                      size='md'
                      weight='500'
                      color={
                        selectedCredential?.holderConsent
                          ? 'green.5'
                          : 'orange.5'
                      }
                    >
                      {selectedCredential?.holderConsent
                        ? 'Consented'
                        : 'Awaiting consent'}
                    </Text>
                  </Box>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Credential issuer
                    </Text>
                    <Text size='md'>{selectedCredential?.issuer.name}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Issue date
                    </Text>
                    <Text size='md'>{selectedCredential.createdAt}</Text>
                    <Text size='sm' color='gray.5' mt={-2}>
                      ({humanizeDate(selectedCredential.createdAt)})
                    </Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Issuer consent
                    </Text>
                    <Text
                      size='md'
                      weight='500'
                      color={
                        selectedCredential?.issuerConsent
                          ? 'green.5'
                          : 'orange.5'
                      }
                    >
                      {selectedCredential?.issuerConsent
                        ? 'Consented'
                        : 'Awaiting consent'}
                    </Text>
                  </Box>
                </Grid.Col>
              </Grid>

              <Box mt={16}>
                <Accordion variant='contained' defaultValue={'payload'}>
                  <Accordion.Item value='payload'>
                    <Accordion.Control>Credential payload</Accordion.Control>
                    <Accordion.Panel>
                      <Prism language='json' withLineNumbers color='violet'>
                        {JSON.stringify(selectedCredential.payload, null, 4)}
                      </Prism>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value='full-credential'>
                    <Accordion.Control>
                      Full credential (JSON)
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Prism language='json' withLineNumbers color='violet'>
                        {JSON.stringify(selectedCredential, null, 4)}
                      </Prism>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Box>
            </Modal>
          )}
          <Flex
            sx={{
              width: '100%',
              flexDirection: 'row',
              aligncreds: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Text weight='bold' size='lg'>
                {user?.name}&apos;s credentials
              </Text>
              <Text color='dimmed' mt={-3}>
                Here are credentials that have been issued to you
              </Text>
              <Box mt={8} sx={{ maxWidth: 520 }}>
                <TextInput
                  sx={{ width: '100%' }}
                  icon={<IconSearch size={16} style={{ opacity: 0.75 }} />}
                  variant='filled'
                  placeholder='Search credentials by type'
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                  rightSection={
                    searchField && (
                      <ActionIcon
                        onClick={() => setSearchField('')}
                        variant='filled'
                        size='sm'
                      >
                        <IconX size={16} style={{ opacity: 0.75 }} />
                      </ActionIcon>
                    )
                  }
                />
              </Box>
            </Box>

            <Box>
              <Button
                component={Link}
                href='/dashboard/issuers/'
                leftIcon={<IconSeeding size={18} />}
                variant='light'
                color='gray'
              >
                Request another credential
              </Button>
            </Box>
          </Flex>
          <Divider variant='dashed' my={16} />
          <Box sx={{ width: '100%' }}>
            <Box>
              <Text weight='bold' size='md'>
                Credentials you showed consent to
              </Text>
              <Text color='dimmed' mt={-3}>
                These are the credentials that you already accepted to be yours
              </Text>
              <Box sx={{ width: '100%' }} my={8}>
                {consentedCredentialsQuery.loading ? (
                  <Loader size='sm' />
                ) : consentedCredentialsQuery.error ? (
                  <Alert color='red'>
                    There is something wrong with the server, please refresh the
                    page
                  </Alert>
                ) : consentedCredentialsQuery.data &&
                  consentedCredentialsQuery.data.credentials.length > 0 ? (
                  <Grid>
                    {!searchField ? (
                      consentedCredentialsQuery.data.credentials.map(
                        (cred: any) => (
                          <Grid.Col span={3} key={cred.id}>
                            <Flex
                              sx={{
                                backgroundColor: bgColor,
                                borderRadius: 16,
                                width: '100%',
                                height: 184,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: 16,
                              }}
                            >
                              <Flex
                                sx={{
                                  width: '100%',
                                  alignItems: 'start',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box>
                                  <Text weight='500'>{cred.user.name}</Text>
                                </Box>
                                <Box
                                  sx={{
                                    paddingInlineEnd: 6,
                                    // paddingBlockStart: 6,
                                  }}
                                >
                                  <Image
                                    src={logoImage}
                                    width='32'
                                    height='32'
                                    alt='chip icon'
                                    placeholder='blur'
                                  />
                                </Box>
                              </Flex>
                              <Box>
                                <Text weight='500' size='xs' color='dimmed'>
                                  {cred.issuer.name}
                                </Text>
                                <Text
                                  size='lg'
                                  mt={-4}
                                  onClick={() => {
                                    setSelectedCredential(cred)
                                    open()
                                  }}
                                  sx={{
                                    transition: 'all ease-out 250ms',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      color: theme.colors.yellow[5],
                                    },
                                  }}
                                >
                                  {cred.type.name}
                                </Text>
                              </Box>
                            </Flex>
                          </Grid.Col>
                        )
                      )
                    ) : conCreds.length > 0 ? (
                      conCreds.map((cred: any) => (
                        <Grid.Col span={3} key={cred.id}>
                          <Flex
                            sx={{
                              backgroundColor: bgColor,
                              borderRadius: 16,
                              width: '100%',
                              height: 184,
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              padding: 16,
                            }}
                          >
                            <Flex
                              sx={{
                                width: '100%',
                                alignItems: 'start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text weight='500'>{cred.user.name}</Text>
                              </Box>
                              <Box
                                sx={{
                                  paddingInlineEnd: 6,
                                  // paddingBlockStart: 6,
                                }}
                              >
                                <Image
                                  src={logoImage}
                                  width='32'
                                  height='32'
                                  alt='chip icon'
                                  placeholder='blur'
                                />
                              </Box>
                            </Flex>
                            <Box>
                              <Text weight='500' size='xs' color='dimmed'>
                                {cred.issuer.name}
                              </Text>
                              <Text
                                size='lg'
                                mt={-4}
                                onClick={() => {
                                  setSelectedCredential(cred)
                                  open()
                                }}
                                sx={{
                                  transition: 'all ease-out 250ms',
                                  cursor: 'pointer',
                                  '&:hover': {
                                    color: theme.colors.yellow[5],
                                  },
                                }}
                              >
                                {cred.type.name}
                              </Text>
                            </Box>
                          </Flex>
                        </Grid.Col>
                      ))
                    ) : (
                      <Alert color='yellow' mt={16}>
                        We couldn&apos;t find any credential related to your
                        search, you can{' '}
                        <Text
                          component='span'
                          sx={{
                            transition: 'all ease-out 200ms',
                            cursor: 'pointer',
                            weight: 500,
                            textDecoration: 'underline',
                            '&:hover': {
                              color: theme.colors.orange[7],
                            },
                          }}
                          onClick={() => setSearchField('')}
                        >
                          view all
                        </Text>{' '}
                        credentials instead!
                      </Alert>
                    )}
                  </Grid>
                ) : (
                  <Alert color='orange'>
                    There aren&apos;t any available credentials for you at the
                    moment
                  </Alert>
                )}
              </Box>
            </Box>
          </Box>
          <Divider variant='dashed' my={16} />
          <Box sx={{ width: '100%' }}>
            <Box>
              <Text weight='bold' size='md'>
                Credentials awaiting consent
              </Text>
              <Text color='dimmed' mt={-3}>
                Here are the credentials awaiting your consent
              </Text>
              <Box sx={{ width: '100%' }} my={8}>
                {unconsentedCredentialsQuery.loading ? (
                  <Loader size='sm' />
                ) : unconsentedCredentialsQuery.error ? (
                  <Alert color='red'>
                    There is something wrong with the server, please refresh the
                    page.
                  </Alert>
                ) : unconsentedCredentialsQuery.data &&
                  unconsentedCredentialsQuery.data.credentials.length > 0 ? (
                  <Grid>
                    {!searchField ? (
                      unconsentedCredentialsQuery.data.credentials.map(
                        (cred: any) => (
                          <Grid.Col span={3} key={cred.id}>
                            <Flex
                              sx={{
                                backgroundColor: bgColor,
                                borderRadius: 16,
                                width: '100%',
                                height: 184,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: 16,
                              }}
                            >
                              <Flex
                                sx={{
                                  width: '100%',
                                  alignItems: 'start',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box>
                                  <Box>
                                    <Text weight='500'>{cred.user.name}</Text>
                                  </Box>
                                  <Box>
                                    <Group spacing={8}>
                                      <Text
                                        weight='500'
                                        size='xs'
                                        color='orange.5'
                                        sx={{
                                          transition: 'all ease-out 200ms',
                                          cursor: 'pointer',
                                          '&:hover': {
                                            textDecoration: 'underline',
                                            color: theme.colors.orange[7],
                                          },
                                        }}
                                        onClick={() =>
                                          handleConsent(cred.id || null)
                                        }
                                      >
                                        Awaiting your consent{' '}
                                      </Text>
                                      {loading && (
                                        <Loader size={16} color='orange ' />
                                      )}
                                    </Group>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    paddingInlineEnd: 6,
                                    // paddingBlockStart: 6,
                                  }}
                                >
                                  <Image
                                    src={logoImage}
                                    width='32'
                                    height='32'
                                    alt='chip icon'
                                    placeholder='blur'
                                  />
                                </Box>
                              </Flex>
                              <Box>
                                <Text weight='500' size='xs' color='dimmed'>
                                  {cred.issuer.name}
                                </Text>
                                <Text
                                  size='lg'
                                  mt={-4}
                                  onClick={() => {
                                    setSelectedCredential(cred)
                                    open()
                                  }}
                                  sx={{
                                    transition: 'all ease-out 250ms',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      color: theme.colors.yellow[5],
                                    },
                                  }}
                                >
                                  {cred.type.name}
                                </Text>
                              </Box>
                            </Flex>
                          </Grid.Col>
                        )
                      )
                    ) : unconCreds.length > 0 ? (
                      unconCreds.map((cred: any) => (
                        <Grid.Col span={3} key={cred.id}>
                          <Flex
                            sx={{
                              backgroundColor: bgColor,
                              borderRadius: 16,
                              width: '100%',
                              height: 184,
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              padding: 16,
                            }}
                          >
                            <Flex
                              sx={{
                                width: '100%',
                                alignItems: 'start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Box>
                                  <Text weight='500'>{cred.user.name}</Text>
                                </Box>
                                <Box>
                                  <Group spacing={8}>
                                    <Text
                                      weight='500'
                                      size='xs'
                                      color='orange.5'
                                      sx={{
                                        transition: 'all ease-out 200ms',
                                        cursor: 'pointer',
                                        '&:hover': {
                                          textDecoration: 'underline',
                                          color: theme.colors.orange[7],
                                        },
                                      }}
                                      onClick={() =>
                                        handleConsent(cred.id || null)
                                      }
                                    >
                                      Awaiting your consent{' '}
                                    </Text>
                                    {loading && (
                                      <Loader size={16} color='orange ' />
                                    )}
                                  </Group>
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  paddingInlineEnd: 6,
                                  // paddingBlockStart: 6,
                                }}
                              >
                                <Image
                                  src={logoImage}
                                  width='32'
                                  height='32'
                                  alt='chip icon'
                                  placeholder='blur'
                                />
                              </Box>
                            </Flex>
                            <Box>
                              <Text weight='500' size='xs' color='dimmed'>
                                {cred.issuer.name}
                              </Text>
                              <Text
                                size='lg'
                                mt={-4}
                                onClick={() => {
                                  setSelectedCredential(cred)
                                  open()
                                }}
                                sx={{
                                  transition: 'all ease-out 250ms',
                                  cursor: 'pointer',
                                  '&:hover': {
                                    color: theme.colors.yellow[5],
                                  },
                                }}
                              >
                                {cred.type.name}
                              </Text>
                            </Box>
                          </Flex>
                        </Grid.Col>
                      ))
                    ) : (
                      <Alert color='yellow' mt={16}>
                        We couldn&apos;t find any credential related to your
                        search, you can{' '}
                        <Text
                          component='span'
                          sx={{
                            transition: 'all ease-out 200ms',
                            cursor: 'pointer',
                            weight: 500,
                            textDecoration: 'underline',
                            '&:hover': {
                              color: theme.colors.orange[7],
                            },
                          }}
                          onClick={() => setSearchField('')}
                        >
                          view all
                        </Text>{' '}
                        credentials instead!
                      </Alert>
                    )}
                  </Grid>
                ) : (
                  <Alert color='orange'>
                    There aren&apos;t any available credentials to show consent
                    to at the moment
                  </Alert>
                )}
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Loader size='sm' />
        // <Alert color='red'>
        //   There was something wrong while trying to fetch your credentials
        // </Alert>
      )}
    </DashboardLayout>
  )
}

export default VerifiableCredentialsHome
