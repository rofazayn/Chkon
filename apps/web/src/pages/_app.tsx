import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import mantineTheme from '../configs/mantine-theme'
import { rtlCache, emotionCache } from '../configs/emotion-cache'
import { AnimatePresence } from 'framer-motion'

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
                alignItems: 'center',
                justifyContent: 'center',
                flexDireciotn: 'column',
                minHeight: '100vh',
                width: '100%',
                maxWidth: '100%',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              })}
            >
              <AnimatePresence mode='wait'>
                <Component {...pageProps} />
              </AnimatePresence>
            </Box>
          </MantineProvider>
        </div>
      </ColorSchemeProvider>
    </>
  )
}
