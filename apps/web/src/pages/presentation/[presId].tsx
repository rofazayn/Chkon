import logoImage from '@/../public/assets/png/logo.png'
import fingerPrintScanGif from '@/../public/assets/gif/fingerprint-scan.gif'
import {
  Accordion,
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
import { IconBulb, IconCheck } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import humanizeDate from '../../utils/humanize-date'
import { usePresentationQuery } from '../../generated/graphql'

const PresentationPage = () => {
  const router = useRouter()
  const { presId } = router.query
  const theme = useMantineTheme()
  const {
    data: presData,
    error: presError,
    loading: presLoading,
  } = usePresentationQuery({
    variables: {
      where: {
        id: (presId as string) || undefined,
      },
    },
    pollInterval: 5000,
  })
  console.log(presData)
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
              <Grid gutter={24}>
                <Grid.Col span={8}>
                  {presData?.presentation && (
                    <Box sx={{ width: '100%' }}>
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

                      <Box mt={16}>
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
                          <Accordion.Item value='full-credential'>
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
                  <Box sx={{ width: '100%' }}>
                    <Text color='gray.6' size='xs'>
                      Signature Verification
                    </Text>
                    <Group spacing={8} mt={4}>
                      <Text size='sm'>Verifying</Text>
                      <Loader color='yellow' size={16} />
                    </Group>
                  </Box>
                  {/* <Box>
                    <Image
                      src={fingerPrintScanGif}
                      alt='Verifying signature...'
                    />
                  </Box> */}
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
