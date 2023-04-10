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
      <AnimateWrapper>
        <motion.div
          key={router.asPath + '2'}
          style={{
            width: '100%',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimateWrapper>
    </Box>
  )
}

export default AuthLayout
