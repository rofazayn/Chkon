import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import { JwtPayload, verify } from 'jsonwebtoken'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import './configs/passport'
import prisma from './configs/prisma-client'
import shield from './configs/shield'
import { JWT_SECRET, NODE_ENV, PORT } from './constants'
import AuthResolver from './graphql/resolvers/auth-resolver'
import { resolvers, User } from './graphql/type-graphql'
import authRoutes from './routes/auth-routes'
import { ApolloContext } from './types/context-types'

// export const refreshTokens: Record<string, any> = {}
const app = express()
console.log(NODE_ENV)

const corsOptions = {
  origin: '*',
}

async function main() {
  // establish db connection
  await prisma.$connect()
  // setup configs
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.set('trust proxy', NODE_ENV !== 'production')
  app.use(cors(corsOptions))
  // app.use(passport.initialize())

  // apollo server
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema: applyMiddleware(
      await buildSchema({
        resolvers: [AuthResolver, ...resolvers],
        validate: false,
      }),
      shield
    ),
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      NODE_ENV === 'development'
        ? ApolloServerPluginLandingPageLocalDefault({ embed: true })
        : ApolloServerPluginLandingPageDisabled(),
    ],
    context: ({ req, res }) => {
      let ctx: ApolloContext = {
        req,
        res,
        user: null,
        prisma,
      }

      try {
        if (req.headers['x-access-token']) {
          const parsedToken: string | JwtPayload = verify(
            (req.headers['x-access-token'] as string).split(' ')[1] as string,
            JWT_SECRET
          )
          ctx.user = parsedToken as User
        }
      } catch {
        ctx.user = null
      }

      return ctx
    },
  })

  await server.start()
  server.applyMiddleware({
    app,
    cors: corsOptions,
  })
  app.use(authRoutes)
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  )
  console.log(`👾 Server listening at http://localhost:${PORT}`)
  console.log(
    `👾 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
