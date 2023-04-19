import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { json, urlencoded } from 'express'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import './configs/passport'
import passport from './configs/passport'
import prisma from './configs/prisma-client'
import shield from './configs/shield'
import { NODE_ENV, PORT } from './constants'
import AuthResolver from './graphql/resolvers/auth-resolver'
import { User, resolvers } from './graphql/type-graphql'
import authRoutes from './routes/auth-routes'
import { ApolloContext } from './types/context-types'

const app = express()

const corsOptions = {
  origin: '*',
}

async function main() {
  await prisma.$connect()
  app.use(cookieParser())
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(cors(corsOptions))
  app.set('trust proxy', NODE_ENV !== 'production')
  app.use(passport.initialize())

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
    context: async ({ req, res }) => {
      let ctx: ApolloContext = {
        req,
        res,
        user: null,
        prisma,
      }

      try {
        const user = await new Promise((resolve, reject) => {
          passport.authenticate(
            'jwt',
            { session: false },
            (err: any, user: User) => {
              if (err) reject(err)
              resolve(user)
            }
          )(req)
        })
        ctx.user = user as User
      } catch (error) {
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
  console.log(`👾 API exposed at http://localhost:${PORT}`)
  console.log(
    `👾 GraphQL endpoint is at http://localhost:${PORT}${server.graphqlPath}`
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
