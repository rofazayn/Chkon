import { Box, Loader, Stack, Text, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import AnimateWrapper from './animate-wrapper'

const AuthLoadingOverlay = () => {
  const theme = useMantineTheme()
  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  }
  return (
    <AnimateWrapper>
      <Box
        sx={{
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.violet[0],
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <Stack align='center'>
          <Loader variant='bars' size='sm' />

          <motion.div
            key='auth-loader'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
            transition={{
              repeat: Infinity,
              repeatDelay: 0,
              duration: 1,
              repeatType: 'reverse',
            }}
          >
            <Text size='sm'>Loading...</Text>
          </motion.div>
        </Stack>
      </Box>
    </AnimateWrapper>
  )
}

export default AuthLoadingOverlay
