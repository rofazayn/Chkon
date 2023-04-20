import {
  Anchor,
  Box,
  Loader,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AnimateWrapper from './animate-wrapper'

const AuthLoadingOverlay = () => {
  const router = useRouter()
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const theme = useMantineTheme()
  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  }
  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setShowMessage(true)
    }, 3000)

    return () => clearTimeout(messageTimeout)
  }, [])

  useEffect(() => {
    let redirectTimeout: string | number | NodeJS.Timeout | undefined
    if (showMessage) {
      redirectTimeout = setTimeout(() => {
        router.replace('/')
      }, 5000)
    }

    return () => clearTimeout(redirectTimeout)
  }, [showMessage, router])

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
        {!showMessage ? (
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
        ) : (
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
            <Stack spacing={0} align='center'>
              <Text size={40} weight='bold'>
                Oops!
              </Text>
              <Text size='sm'>Redirecting you in a moment...</Text>
              <Text size='sm'>
                Or click here to{' '}
                <Text component={'a'} href='/' underline>
                  redirect manually
                </Text>
              </Text>
            </Stack>
          </motion.div>
        )}
      </Box>
    </AnimateWrapper>
  )
}

export default AuthLoadingOverlay
