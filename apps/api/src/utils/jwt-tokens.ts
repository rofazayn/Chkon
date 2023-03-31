import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from '../constants'
import { User } from '../graphql/type-graphql'

export const createAccessToken = (payload: User) => {
  if (!payload) return
  const accessToken = sign(payload, JWT_SECRET, {
    expiresIn: '15min',
  })

  return accessToken
}

export const createRefreshToken = (userId: string, guid: string) => {
  if (!userId) return
  const refreshToken = sign({ userId, guid }, JWT_SECRET, {
    expiresIn: '30d',
  })

  return refreshToken
}
