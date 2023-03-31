import { ApolloError } from 'apollo-server-core'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { JWT_SECRET } from '../../constants'
import { ApolloContext } from '../../types/context-types'
import { AuthResponse, RefreshTokensResponse } from '../../types/response-types'
import { createAccessToken, createRefreshToken } from '../../utils/jwt-tokens'
import { User } from '../type-graphql'
import { v4 as uuidv4 } from 'uuid'

@Resolver(User)
class AuthResolver {
  // add atleast one query to avoid schema error
  @Query(() => String)
  hello() {
    return 'Hello from AuresX!'
  }

  @Query(() => User, { nullable: true })
  async profile(@Ctx() { user, prisma }: ApolloContext) {
    try {
      const target = await prisma.user.findUnique({ where: { id: user?.id } })
      return target || null
    } catch {
      throw new ApolloError('something went wrong')
    }
  }

  @Mutation(() => AuthResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!email || !password) throw new ApolloError('missing login data')

    const user = await prisma.user.findUnique({
      where: { email: email },
    })
    if (!user) throw new ApolloError('invalid_username')

    const valid = compareSync(password, user.password)
    if (!valid) throw new ApolloError('invalid_password')

    const accessToken = createAccessToken({
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })

    const refreshTokenGuid = uuidv4()
    const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

    return {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    }
  }

  @Mutation(() => AuthResponse)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('name') name: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!name || !email || !password)
      throw new ApolloError('missing_credentials')

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) throw new ApolloError('email_not_available')

    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    const hashedPass = hashSync(password, salt)

    try {
      const user = await prisma.user.create({
        data: { name, email, password: hashedPass },
      })

      if (user) {
        const accessToken = createAccessToken({
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return {
          accessToken,
          refreshToken: newRefreshToken,
          user,
        }
      }

      throw new ApolloError('registration_arror')
    } catch {
      throw new ApolloError('server_error')
    }
  }

  @Mutation(() => RefreshTokensResponse)
  async refresh(@Ctx() { prisma, req }: ApolloContext) {
    let refreshToken = (req.headers['x-refresh-token'] as string).split(' ')[1]

    if (refreshToken) {
      const token = verify(refreshToken, JWT_SECRET) as {
        userId: string
        guid: string
      }

      if (!token) {
        return { accessToken: null, refreshToken: null }
      }

      const user = await prisma.user.findUnique({
        where: { id: token.userId },
      })

      if (user) {
        const accessToken = createAccessToken({
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return { accessToken, refreshToken: newRefreshToken }
      }
    }
    return { accessToken: null, refreshToken: null }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { user: currentUser }: ApolloContext) {
    currentUser = null
    return true
  }
}

export default AuthResolver
