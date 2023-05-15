import { useRouter } from 'next/router'
import { createContext, useCallback, useEffect, useState } from 'react'
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from '../utils/jwt-operations'
import { useProfileQuery } from '../generated/graphql'
import { useReactiveVar } from '@apollo/client'
import { refreshStatusVar } from '../configs/apollo-client'

export const AuthContext = createContext({} as any)
export const AuthProvider = ({ children }: any) => {
  const [authStatus, setAuthStatus] = useState<string>('stale')
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const profileQuery = useProfileQuery({
    skip: authStatus === 'no',
    fetchPolicy: 'network-only',
  })

  const refreshVar = useReactiveVar(refreshStatusVar)

  const logout = useCallback(() => {
    setAccessToken(null)
    setRefreshToken(null)
    setAuthStatus('no')
    setUser(null)
  }, [])

  // useEffect(() => {
  //   if (refreshVar === 'fail') logout()
  // }, [refreshVar, logout, authStatus])

  useEffect(() => {
    async function authCheck() {
      if (!getAccessToken()) {
        setUser(null)
        setAuthStatus('no')
      } else if (authStatus === 'check' || authStatus === 'stale') {
        const res = await profileQuery.refetch()
        if (res.data.profile) {
          setUser(res.data.profile)
          setAuthStatus('yes')
        } else {
          setUser(null)
          setAuthStatus('no')
        }
      }
    }

    authCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus, profileQuery])

  useEffect(() => {
    if (profileQuery.loading) {
      setAuthStatus('stale')
    }

    if (profileQuery.data?.profile) {
      setUser(profileQuery.data.profile)
      setAuthStatus('yes')
    }

    // if (authStatus !== 'check' && !profileQuery.data && profileQuery.error) {
    //   setUser(null)
    //   setAuthStatus('no')
    // }
  }, [profileQuery, authStatus])

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        setAuthStatus,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
