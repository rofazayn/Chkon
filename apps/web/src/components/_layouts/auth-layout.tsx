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
        // paddingTop: 120,
        // paddingBottom: 320,
      }}
    >
      {children}
    </Box>
  )
}

export default AuthLayout
