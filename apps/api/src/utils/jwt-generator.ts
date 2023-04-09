import { sign } from 'jsonwebtoken'
import { JWT_PRIV_KEY } from '../constants'
import { User } from '../graphql/type-graphql'

export const createAccessToken = (payload: User) => {
  if (!payload) return
  const accessToken = sign(payload, JWT_PRIV_KEY, {
    expiresIn: '5min',
    algorithm: 'RS256',
  })

  return accessToken
}

export const createRefreshToken = (userId: string, guid: string) => {
  if (!userId) return
  const refreshToken = sign({ userId, guid }, JWT_PRIV_KEY, {
    expiresIn: '1d',
    algorithm: 'RS256',
  })

  return refreshToken
}
