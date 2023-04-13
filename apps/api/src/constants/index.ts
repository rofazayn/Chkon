import fs from 'fs'
import path from 'path'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const PORT = process.env.SERVER_PORT!
export const JWT_SECRET = process.env.JWT_SECRET!
export const JWT_PRIV_KEY = fs.readFileSync(
  path.join(__dirname, '..', 'keys', 'id_rsa_priv.pem'),
  'utf-8'
)
export const JWT_PUB_KEY = fs.readFileSync(
  path.join(__dirname, '..', 'keys', 'id_rsa_pub.pem'),
  'utf-8'
)
