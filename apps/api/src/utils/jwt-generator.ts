import { sign } from 'jsonwebtoken'
import { JWT_PRIV_KEY } from '../constants'

export const createAccessToken = (payload: { id: string }) => {
  if (!payload) return
  const accessToken = sign(payload, JWT_PRIV_KEY, {
    expiresIn: '5min',
    algorithm: 'RS256',
  })

  return accessToken
}

export const createRefreshToken = (id: string, guid: string) => {
  if (!id) return
  const refreshToken = sign({ id, guid }, JWT_PRIV_KEY, {
    expiresIn: '1d',
    algorithm: 'RS256',
  })

  return refreshToken
}
