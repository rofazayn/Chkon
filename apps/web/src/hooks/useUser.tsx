import { useCallback, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/user-context'
import useAuth from './useAuth'
import { useRouter } from 'next/router'

const useUser = () => {
  const { profileQuery } = useContext(UserContext)
  const { isAuthenticated, isCheckingAuth } = useAuth()

  const router = useRouter()

  const fetchProfile = useCallback(async () => {
    await profileQuery.refetch()
  }, [profileQuery])

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile()
    }
  }, [fetchProfile, isAuthenticated, isCheckingAuth])

  const user = profileQuery?.data?.profile

  useEffect(() => {
    if (
      user &&
      user.status !== 'verified' &&
      router.pathname.startsWith('/dashboard')
    ) {
      router.push('/dashboard/verification')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return {
    user,
    profileQuery,
  }
}

export default useUser
