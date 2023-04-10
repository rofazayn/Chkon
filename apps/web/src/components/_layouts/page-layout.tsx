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
      <AnimateWrapper>
        <motion.div
          key={router.asPath + '1'}
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

export default PageLayout
