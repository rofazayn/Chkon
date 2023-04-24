import { ApolloProvider } from '@apollo/client'
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import apolloClient from '../configs/apollo-client'
import { emotionCache, rtlCache } from '../configs/emotion-cache'
import mantineTheme from '../configs/mantine-theme'
import { AuthProvider } from '../contexts/auth-context'
import { UserProvider } from '../contexts/user-context'
import { OrganizationProvider } from '../contexts/organization-context'
import { UiProvider } from '../contexts/ui-context'
import { Notifications } from '@mantine/notifications'

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

  return (
    <>
      <Head>
        <title>Chkon: E-ID</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <UserProvider>
            <OrganizationProvider>
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
                    <UiProvider>
                      <Notifications position='bottom-center' limit={3} />
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
                              ? // ? theme.fn.darken(theme.colors.violet[9], 0.92)
                                theme.fn.darken(theme.colors.dark[8], 0.4)
                              : theme.fn.lighten(theme.colors.violet[0], 0.4),
                        })}
                      >
                        <Box sx={{ width: '100%' }}>
                          <Component {...pageProps} />
                        </Box>
                      </Box>
                    </UiProvider>
                  </MantineProvider>
                </div>
              </ColorSchemeProvider>
            </OrganizationProvider>
          </UserProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}
