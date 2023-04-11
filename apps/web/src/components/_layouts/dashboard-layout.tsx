import {
  Box,
  Container,
  Loader,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardNavbar from '../dashboard-navbar'
import Topbar from '../topbar'

const DashboardLayout = ({ children }: any) => {
  const theme = useMantineTheme()
  const [authCheck, setAuthCheck] = useState<boolean>(false)
  const [phase, setPhase] = useState<number>(0)
  useEffect(() => {
    if (phase === 0) {
      setTimeout(() => setPhase(1), 1500)
    } else if (phase === 1) {
      setTimeout(() => setPhase(2), 900)
    } else {
      setTimeout(() => setAuthCheck(false), 1700)
    }
  }, [authCheck, phase])

  const statusMessages = [
    'Validating credentials...',
    'Authenticating...',
    'Welcome back!',
  ]

  const router = useRouter()

  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  }

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
      {authCheck ? (
        <Box>
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
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'stretch',
          }}
        >
          <Box
            sx={{
              maxWidth: 320,
              width: '100%',
              minWidth: 320,
            }}
          >
            <DashboardNavbar />
          </Box>
          <Box sx={{ width: '100%', marginBlock: 16 }}>
            <Container size={'lg'}>
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Topbar />

                <Box
                  sx={{
                    width: '100%',
                    minHeight: 5000,
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[8]
                        : 'white',
                    padding: 24,
                    borderRadius: 6,
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default DashboardLayout
