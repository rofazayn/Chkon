import { createContext, useCallback, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useProfileQuery } from '../generated/graphql'

export const UserContext = createContext({} as any)
export const UserProvider = ({ children }: any) => {
  const { isAuthenticated } = useAuth()
  const [user, setUser] = useState<any>(null)
  const profileQuery = useProfileQuery({ skip: !isAuthenticated })

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
  }, [fetchProfile, isAuthenticated])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
