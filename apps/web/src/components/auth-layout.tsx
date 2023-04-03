import { Box } from '@mantine/core'

const AuthLayout = ({ children }: any) => {
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
      {children}
    </Box>
  )
}

export default AuthLayout
