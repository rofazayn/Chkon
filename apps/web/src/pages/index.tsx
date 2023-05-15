import { useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import PageLayout from '../components/_layouts/page-layout'
import HeroSection from '../components/hero-section'
import useAuth from '../hooks/useAuth'

export default function Home() {
  const theme = useMantineTheme()
  const { authStatus } = useAuth()

  return (
    <>
      <Head>
        <title>Welcome to Chkon: D-ID</title>
        <meta
          name='description'
          content='Digital identity at your fingertips.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout>
        <HeroSection />
      </PageLayout>
    </>
  )
}
