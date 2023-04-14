import { Box, Container, useMantineTheme } from '@mantine/core'
import { useAuth } from '../../hooks/useAuth'
import AuthCheckOverlay from '../auth-check-overlay'
import AuthLoadingOverlay from '../auth-loading-overlay'
import DashboardNavbar from '../dashboard-navbar'
import Topbar from '../topbar'

const DashboardLayout = ({ children }: any) => {
  const theme = useMantineTheme()
  const { isAuthenticated, isCheckingAuth } = useAuth()
  const {} = useAuth()

  if (isCheckingAuth) {
    return <AuthCheckOverlay />
  }

  if (!isAuthenticated) {
    return <AuthLoadingOverlay />
  }

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
        <Box sx={{ width: '100%', marginBlock: 16 }}>
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
                  minHeight: 5000,
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[8]
                      : 'white',
                  padding: 24,
                  borderRadius: 6,
                }}
              >
                {children}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
