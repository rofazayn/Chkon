import logoImage from '@/../public/assets/png/logo.png'
// import fingerPrintScanGif from '@/../public/assets/gif/fingerprint-scan.gif'
import {
  Accordion,
  Alert,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Loader,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { IconBulb, IconChecks } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import humanizeDate from '../../utils/humanize-date'
import { usePresentationQuery } from '../../generated/graphql'
import Lottie from 'lottie-react'
import scanAnimation from '../../../public/assets/json/scan.json'
import verifiedAnimation from '../../../public/assets/json/verified.json'
import { useEffect, useState } from 'react'

const PresentationPage = () => {
  const router = useRouter()
  const { presId } = router.query
  const theme = useMantineTheme()
  const {
    data: presData,
    error: _presError,
    loading: _presLoading,
  } = usePresentationQuery({
    variables: {
      where: {
        id: (presId as string) || undefined,
      },
    },
    pollInterval: 5000,
  })

  const [verified, setVerified] = useState<boolean>(false)
  useEffect(() => {
    let verificationTimeout: any
    verificationTimeout = setTimeout(() => {
      setVerified(true)
    }, 10000)

    return () => clearTimeout(verificationTimeout)
  }, [])
  return (
    <Box
      sx={{
        width: '100%',
        paddingBlock: 24,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Container sx={{ width: '100%', maxWidth: 1024 }}>
          <Box
            sx={{
              width: '100%',
              // minHeight: '100%',
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
              padding: 24,
              borderRadius: 12,
              marginBlock: 24,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Flex
                sx={{
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  gap: 16,
                  width: '100%',
                }}
              >
                <Group spacing={16} align='center'>
                  <Box component={Link} href='/'>
                    <Image
                      src={logoImage}
                      alt='chkon logo'
                      width='48'
                      height='48'
                      placeholder='blur'
                    />
                  </Box>
                  <Box>
                    <Text size='sm' weight='500'>
                      Presentation details
                    </Text>
                    <Text
                      size='xs'
                      color='gray.6'
                      sx={{ fontFamily: 'monospace' }}
                    >
                      ID: {presId}
                    </Text>
                  </Box>
                </Group>
                {presData ? (
                  <Group spacing={4}>
                    <Text
                      size='xs'
                      color='gray.6'
                      weight='500'
                      sx={{ opacity: 0.75 }}
                    >
                      Provided by Chkon
                    </Text>
                    <IconBulb
                      size={15}
                      style={{ color: theme.colors.gray[6] }}
                    />
                  </Group>
                ) : (
                  <Loader size='sm' />
                )}
              </Flex>
              {presData && <Divider my={24} variant='dashed' />}
            </Box>
            {presData && (
              <Grid gutter={24} sx={{ minHeight: '100%' }}>
                <Grid.Col span={8} sx={{ minHeight: '100%' }}>
                  {presData?.presentation && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        minHeight: '100%',
                        flexGrow: 1,
                      }}
                    >
                      <Grid gutter={16}>
                        <Grid.Col span={4}>
                          <Box sx={{ width: '100%' }}>
                            <Text color='gray.6' size='xs'>
                              Presentation type
                            </Text>
                            <Text size='md'>
                              {presData?.presentation?.credential.type.name}
                            </Text>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Box sx={{ width: '100%' }}>
                            <Text color='gray.6' size='xs'>
                              Presentation holder
                            </Text>
                            <Text size='md'>
                              {presData?.presentation?.credential.user.name}
                            </Text>
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
                                presData?.presentation?.credential.holderConsent
                                  ? 'green.5'
                                  : 'orange.5'
                              }
                            >
                              {presData?.presentation?.credential.holderConsent
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
                            <Text size='md'>
                              {presData?.presentation?.credential.issuer.name}
                            </Text>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Box sx={{ width: '100%' }}>
                            <Text color='gray.6' size='xs'>
                              Issue date
                            </Text>
                            <Text size='md'>
                              {presData?.presentation?.createdAt}
                            </Text>
                            <Text size='sm' color='gray.5' mt={-2}>
                              ({humanizeDate(presData?.presentation?.createdAt)}
                              )
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
                                presData?.presentation?.credential.issuerConsent
                                  ? 'green.5'
                                  : 'orange.5'
                              }
                            >
                              {presData?.presentation?.credential.issuerConsent
                                ? 'Consented'
                                : 'Awaiting consent'}
                            </Text>
                          </Box>
                        </Grid.Col>
                      </Grid>

                      <Box
                        mt={24}
                        sx={{
                          minHeight: '100%',
                          // backgroundColor: verified
                          //   ? theme.colors.green[5]
                          //   : theme.colors.orange[5],
                          flexGrow: 1,
                          borderRadius: 12,
                        }}
                      >
                        <Accordion variant='contained' defaultValue={'payload'}>
                          <Accordion.Item value='payload'>
                            <Accordion.Control>
                              Presentation payload
                            </Accordion.Control>
                            <Accordion.Panel>
                              <Prism
                                language='json'
                                withLineNumbers
                                color='violet'
                              >
                                {JSON.stringify(
                                  presData?.presentation?.credential.payload,
                                  null,
                                  4
                                )}
                              </Prism>
                            </Accordion.Panel>
                          </Accordion.Item>
                          <Accordion.Item value='full-presentation'>
                            <Accordion.Control>
                              Full presentation (JSON)
                            </Accordion.Control>
                            <Accordion.Panel>
                              <Prism
                                language='json'
                                withLineNumbers
                                color='violet'
                              >
                                {JSON.stringify(
                                  presData?.presentation,
                                  null,
                                  4
                                )}
                              </Prism>
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      </Box>
                    </Box>
                  )}
                </Grid.Col>
                <Grid.Col span={4}>
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <Text color='gray.6' size='xs'>
                        Signature Verification
                      </Text>
                      <Group spacing={8} mt={4}>
                        <Text size='sm' weight='bold'>
                          {verified ? 'Verified' : 'Verifying'}
                        </Text>
                        {verified ? (
                          <IconChecks size={16} color={theme.colors.green[5]} />
                        ) : (
                          <Loader color='yellow' size={16} />
                        )}
                      </Group>
                      <Text size='xs' color='gray.6' mt={4}>
                        Chkon offers identity check, verifiable credentials and
                        solutions concerning digital identity, we are proud to
                        serve algerian citizens 🇩🇿
                      </Text>
                      <Divider variant='dashed' mt={16} mb={6} />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        // alignItems: 'flex-end',
                        height: '100%',
                        flexGrow: 1,
                      }}
                    >
                      {verified ? (
                        <Box
                          sx={{
                            width: '100%',
                            paddingTop: 16,
                            // paddingBottom: 40,
                          }}
                        >
                          <Alert color='gray' variant='light'>
                            This presentation is provided by Chkon, it is also
                            valid and has not been tampered with.
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                              }}
                            >
                              <Box sx={{ width: 180, paddingBlock: 24 }}>
                                <Lottie animationData={verifiedAnimation} />
                              </Box>
                            </Box>
                          </Alert>
                          {/* <Text size='xs' color='gray.6' mt={16}>
                            Chkon offers identity and verifiable credentials
                            features to Algerian citizens. 🇩🇿
                          </Text> */}

                          {/* <Prism language='json'>
                            {JSON.stringify(
                              presData.presentation?.signature,
                              null,
                              4
                            )}
                          </Prism> */}
                        </Box>
                      ) : (
                        // <Box sx={{ maxWidth: 240 }}>
                        //   <Lottie animationData={scanAnimation} />
                        // </Box>
                        <Box
                          sx={{
                            width: '100%',
                            paddingTop: 16,
                            // paddingBottom: 40,
                          }}
                        >
                          <Alert color='gray' variant='light'>
                            Standby while we verify this presentation, this wont
                            take long, so please be patient.
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                              }}
                            >
                              <Box sx={{ width: 180, paddingBlock: 24 }}>
                                <Lottie animationData={scanAnimation} />
                              </Box>
                            </Box>
                          </Alert>
                        </Box>
                      )}
                    </Box>
                  </Flex>
                </Grid.Col>
              </Grid>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PresentationPage
