import { Box } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import AuthLoadingOverlay from '../auth-loading-overlay'
import AuthCheckOverlay from '../auth-check-overlay'

const AuthLayout = ({ children }: any) => {
  const router = useRouter()
  const { authStatus } = useAuth()
  useEffect(() => {
    if (authStatus === 'yes') {
      router.replace('/dashboard')
    }
  }, [authStatus, router])

  if (authStatus === 'no')
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

  return <AuthCheckOverlay />
}

export default AuthLayout
