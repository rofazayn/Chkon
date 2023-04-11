import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import AnimateWrapper from '../animate-wrapper'

const AuthLayout = ({ children }: any) => {
  const router = useRouter()
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
