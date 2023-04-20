import { Stack, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PageLayout from '../components/_layouts/page-layout'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  const router = useRouter()
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.replace('/')
    }, 5000)

    return () => clearTimeout(redirectTimeout)
  }, [router])

  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  }
  return (
    <PageLayout>
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
            404!
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
    </PageLayout>
  )
}

export default NotFoundPage
