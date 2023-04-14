import { Box, Loader, Stack, Text, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import AnimateWrapper from './animate-wrapper'

const AuthCheckOverlay = () => {
  const theme = useMantineTheme()
  const { isCheckingAuth } = useAuth()

  const [phase, setPhase] = useState<number>(0)

  useEffect(() => {
    if (phase === 0) {
      setTimeout(() => setPhase(1), 1500)
    } else if (phase === 1) {
      setTimeout(() => setPhase(2), 900)
    }
  }, [isCheckingAuth, phase])

  const statusMessages = [
    'Checking credentials...',
    'Trying to authenticate...',
    'Please be patient...',
  ]

  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  }
  return isCheckingAuth ? (
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
            <Text size='sm'>{statusMessages[phase]}</Text>
          </motion.div>
        </Stack>
      </Box>
    </AnimateWrapper>
  ) : null
}

export default AuthCheckOverlay
