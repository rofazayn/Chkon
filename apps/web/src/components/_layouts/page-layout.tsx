import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import AnimateWrapper from '../animate-wrapper'

const PageLayout = ({ children }: any) => {
  const router = useRouter()
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
      {children}
    </Box>
  )
}

export default PageLayout
