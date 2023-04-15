import { Box } from '@mantine/core'
import useAuth from '../../hooks/useAuth'
import AuthCheckOverlay from '../auth-check-overlay'
import AuthLoadingOverlay from '../auth-loading-overlay'

const AuthLayout = ({ children }: any) => {
  const { isAuthenticated, isCheckingAuth } = useAuth()

  if (isCheckingAuth) {
    return <AuthCheckOverlay />
  }

  if (isAuthenticated) {
    return <AuthLoadingOverlay />
  }

  return (
    <Box
      sx={{
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  )
}

export default AuthLayout
