import { createContext } from 'react'
import { Exact, ProfileQuery, useProfileQuery } from '../generated/graphql'
import useAuth from '../hooks/useAuth'
import { QueryResult } from '@apollo/client'

interface IUserContext {
  profileQuery: QueryResult<
    ProfileQuery,
    Exact<{
      [key: string]: never
    }>
  >
}

export const UserContext = createContext<IUserContext>({} as IUserContext)
export const UserProvider = ({ children }: any) => {
  const { isAuthenticated } = useAuth()
  const profileQuery = useProfileQuery({
    skip: !isAuthenticated,
    fetchPolicy: 'network-only',
  })

  return (
    <UserContext.Provider value={{ profileQuery }}>
      {children}
    </UserContext.Provider>
  )
}
