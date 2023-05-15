import { Box, Container, Group, Text, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import AuthCheckOverlay from '../auth-check-overlay'
import DashboardNavbar from '../dashboard-navbar'
import Topbar from '../topbar'

const DashboardLayout = ({ children }: any) => {
  const theme = useMantineTheme()
  const { authStatus } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (authStatus === 'no') {
      router.replace('/auth/login')
    }
  }, [authStatus, router])

  if (authStatus === 'yes')
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'stretch',
          }}
        >
          <Box
            sx={{
              maxWidth: 320,
              width: '100%',
              minWidth: 320,
            }}
          >
            <DashboardNavbar />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 16 }}>
            <Container fluid sx={{ maxWidth: 1440 }}>
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Topbar />

                <Box
                  sx={{
                    width: '100%',
                    minHeight: '91vh',
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[8]
                        : 'white',
                    padding: 24,
                    borderRadius: 12,
                  }}
                >
                  {children}
                </Box>
                <Box
                  mt={8}
                  px={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text size='xs' color='dimmed' weight='500'>
                    Chkon&trade;, Property of AuresX SPAS{' '}
                    <Text
                      component='span'
                      size='md'
                      sx={{
                        display: 'inline-flex',
                        transform: 'translateY(2px)',
                      }}
                    >
                      🇩🇿
                    </Text>
                  </Text>
                  <Group spacing={8}>
                    <Text size='xs' color='dimmed'>
                      Privacy Policy
                    </Text>
                    <Text size='xs' color='dimmed'>
                      Cookies
                    </Text>
                    <Text size='xs' color='dimmed'>
                      Conditions
                    </Text>
                  </Group>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    )

  return <AuthCheckOverlay />
}

export default DashboardLayout
