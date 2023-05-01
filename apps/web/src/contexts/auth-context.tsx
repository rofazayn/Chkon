import { createContext, useEffect, useState } from 'react'
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from '../utils/jwt-operations'
import { useProfileQuery } from '../generated/graphql'
import { setRefreshToken } from '../utils/jwt-operations'
import { useRouter } from 'next/router'
import useUser from '../hooks/useUser'
import { refreshStatusVar } from '../configs/apollo-client'
import { useReactiveVar } from '@apollo/client'

export const AuthContext = createContext({} as any)
export const AuthProvider = ({ children }: any) => {
  const router = useRouter()
  const profileQuery = useProfileQuery({
    skip: true,
  })
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true)
  const [lastRequestedURL, setLastRequestedURL] = useState<string | null>(null)
  const { user } = useUser()
  const refreshStatus = useReactiveVar(refreshStatusVar)

  useEffect(() => {
    if (
      isAuthenticated &&
      !isCheckingAuth &&
      router.pathname.startsWith('/auth')
    ) {
      router.replace(lastRequestedURL || '/dashboard')
    } else if (
      !isAuthenticated &&
      !isCheckingAuth &&
      router.pathname.startsWith('/dashboard')
    ) {
      router.replace('/auth/login')
    }
  }, [user, router, isAuthenticated, isCheckingAuth, lastRequestedURL])

  useEffect(() => {
    if (isAuthenticated && lastRequestedURL) {
      router.replace(lastRequestedURL)
      setLastRequestedURL(null)
    }
  }, [isAuthenticated, lastRequestedURL, router])

  function logout() {
    setAccessToken()
    setRefreshToken()
    setIsAuthenticated(false)
    setIsCheckingAuth(false)
  }

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (accessToken && refreshToken) {
        try {
          const user = await profileQuery.refetch()

          // if (refreshStatus === 'error') {
          //   logout()
          // }

          if (user) {
            setTimeout(() => {
              setIsAuthenticated(true)
              setIsCheckingAuth(false)
            }, 4000)
            return
          }
        } catch {
          setTimeout(() => {
            logout()
          }, 4000)
        }
      }
      setTimeout(() => {
        logout()
      }, 4000)
    }

    checkAuth()
  }, [profileQuery, refreshStatus])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isCheckingAuth,
        setIsCheckingAuth,
        lastRequestedURL,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
