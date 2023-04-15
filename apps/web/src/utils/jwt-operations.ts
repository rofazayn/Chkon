import jwtDecode from 'jwt-decode'
import { refreshStatusVar } from '../configs/apollo-client'

export const setAccessToken = (token: string | null = null): void => {
  if (token && checkTokenFormat(token) && !checkTokenExpiry(token)) {
    localStorage.setItem('access_token', token as string)
  } else {
    localStorage.removeItem('access_token')
  }
}

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem('access_token') || ''
  if (!checkTokenExpiry(token) && checkTokenFormat(token)) return token
  return null
}

export const setRefreshToken = (token: string | null = null): void => {
  if (token && checkTokenFormat(token) && !checkTokenExpiry(token)) {
    localStorage.setItem('refresh_token', token as string)
  } else {
    localStorage.removeItem('refresh_token')
  }
}

export const getRefreshToken = (): string | null => {
  const token = localStorage.getItem('refresh_token') || ''
  if (!checkTokenExpiry(token) && checkTokenFormat(token)) return token
  return null
}

export const checkTokenExpiry = (token?: string): boolean => {
  if (!token) return true
  try {
    const { exp }: any = jwtDecode(token)
    if (Date.now() >= exp * 1000) {
      refreshStatusVar('error')
      return true
    }
    return false
  } catch (error) {
    return true
  }
}

export const checkTokenFormat = (token?: string): boolean => {
  if (!token) return false
  try {
    const decodedToken = jwtDecode(token)
    if (!decodedToken) {
      refreshStatusVar('error')
    }
    return !!jwtDecode(token)
  } catch {
    return false
  }
}
