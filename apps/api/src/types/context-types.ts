import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import type { User } from '../graphql/type-graphql'

export type ApolloContext = {
  req: Request
  res: Response
  user: User | null
  prisma: PrismaClient
}
