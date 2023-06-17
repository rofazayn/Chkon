import { ApolloError } from 'apollo-server-core'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { JWT_PUB_KEY } from '../../constants'
import { ApolloContext } from '../../types/context-types'
import { AuthResponse, RefreshTokensResponse } from '../../types/response-types'
import {
  createAccessToken,
  createRefreshToken,
} from '../../utils/jwt-generator'
import { User } from '../type-graphql'

@Resolver(User)
class AuthResolver {
  @Query(() => String)
  hello() {
    return 'Hello from Chkon!'
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
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!username || !password) throw new ApolloError('missing login data')

    const user = await prisma.user.findUnique({
      where: { username: username },
    })
    if (!user) throw new ApolloError('invalid_username')
    if (user.deleted) throw new ApolloError('account_deleted')

    const valid = compareSync(password, user.password)
    if (!valid) throw new ApolloError('invalid_password')

    const newAccessToken = createAccessToken({
      id: user.id,
    })

    const refreshTokenGuid = uuidv4()
    const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    }
  }

  @Mutation(() => AuthResponse)
  async register(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('username') username: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!name || !email || !username || !password)
      throw new ApolloError('missing_credentials')

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) throw new ApolloError('email_not_available')

    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    const hashedPass = hashSync(password, salt)

    try {
      const user = await prisma.user.create({
        data: { name, email, username, password: hashedPass },
      })

      if (user) {
        const accessToken = createAccessToken({
          id: user.id,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return {
          accessToken,
          refreshToken: newRefreshToken,
        }
      }

      throw new ApolloError('registration_error')
    } catch {
      throw new ApolloError('server_error')
    }
  }

  @Mutation(() => RefreshTokensResponse)
  async refresh(@Ctx() { prisma, req }: ApolloContext) {
    let refreshToken = (req.headers['x-refresh-token'] as string).split(' ')[1]

    if (refreshToken) {
      const token = verify(refreshToken, JWT_PUB_KEY) as {
        id: string
        guid: string
      }

      if (!token) {
        return { accessToken: null, refreshToken: null }
      }

      const user = await prisma.user.findUnique({
        where: { id: token.id },
      })

      if (user) {
        const accessToken = createAccessToken({
          id: user.id,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return { accessToken, refreshToken: newRefreshToken }
      }
    }
    return { accessToken: null, refreshToken: null }
  }
}

export default AuthResolver
