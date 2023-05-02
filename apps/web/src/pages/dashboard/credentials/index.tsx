import logoImage from '@/../public/assets/png/chip.png'
import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Loader,
  Text,
  TextInput,
} from '@mantine/core'
import { IconSearch, IconSeeding } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useCredentialsQuery } from '../../../generated/graphql'
import useUI from '../../../hooks/useUI'
import useUser from '../../../hooks/useUser'

const VerifiableCredentialsHome = () => {
  const { user } = useUser()
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

  return (
    <DashboardLayout>
      {user ? (
        <>
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
                {user?.name}&apos; credentials
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
                Credentials you consent to
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
                    {consentedCredentialsQuery.data.credentials.map(
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
                                  paddingBlockStart: 6,
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
                              <Text size='lg' mt={-4}>
                                {cred.type.name}
                              </Text>
                            </Box>
                          </Flex>
                        </Grid.Col>
                      )
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
                    {unconsentedCredentialsQuery.data.credentials.map(
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
                                  <Text weight='500' size='xs' color='orange.5'>
                                    Awaiting your consent
                                  </Text>
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  paddingInlineEnd: 6,
                                  paddingBlockStart: 6,
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
                              <Text size='lg' mt={-4}>
                                {cred.type.name}
                              </Text>
                            </Box>
                          </Flex>
                        </Grid.Col>
                      )
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
