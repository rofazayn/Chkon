import { useRouter } from 'next/router'
import { createContext, useCallback, useEffect, useState } from 'react'
import { useProfileQuery } from '../generated/graphql'
import useAuth from '../hooks/useAuth'

export const UserContext = createContext({} as any)
export const UserProvider = ({ children }: any) => {
  const { isAuthenticated, isCheckingAuth } = useAuth()
  const [user, setUser] = useState<any>(null)
  const profileQuery = useProfileQuery({
    skip: !isAuthenticated,
    fetchPolicy: 'network-only',
  })
  const router = useRouter()

  const fetchProfile = useCallback(async () => {
    await profileQuery.refetch()
    if (profileQuery.data?.profile) {
      setUser(profileQuery.data.profile)
    }
  }, [profileQuery])

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile()
    }
  }, [fetchProfile, isAuthenticated, isCheckingAuth])

  useEffect(() => {
    if (user && !user.verified && router.pathname.startsWith('/dashboard')) {
      router.push('/dashboard/verification')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
