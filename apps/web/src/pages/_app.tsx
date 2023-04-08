import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { emotionCache, rtlCache } from '../configs/emotion-cache'
import mantineTheme from '../configs/mantine-theme'
import { useRouter } from 'next/router'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = useCallback(
    (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark')),
    [colorScheme]
  )

  useEffect(() => {
    toggleColorScheme(preferredColorScheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferredColorScheme])

  const [rtl, _setRtl] = useState(false)
  const router = useRouter()
  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Head>
        <title>Chkon - Digital Identity</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <div dir={rtl ? 'rtl' : 'ltr'}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              ...mantineTheme,
              colorScheme,
              dir: rtl ? 'rtl' : 'ltr',
            }}
            emotionCache={rtl ? rtlCache : emotionCache}
          >
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'stretch',
                flexDireciotn: 'column',
                minHeight: '100vh',
                width: '100%',
                maxWidth: '100%',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.darken(theme.colors.violet[9], 0.9)
                    : theme.fn.lighten(theme.colors.violet[0], 0.25),
              })}
            >
              <AnimatePresence
                mode='wait'
                initial={false}
                onExitComplete={onExitComplete}
              >
                <motion.div
                  key={router.route}
                  style={{
                    width: '100%',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </Box>
          </MantineProvider>
        </div>
      </ColorSchemeProvider>
    </>
  )
}
