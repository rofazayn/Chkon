import passport from 'passport'
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
} from 'passport-jwt'
import { JWT_PUB_KEY } from '../constants'
import prisma from './prisma-client'

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_PUB_KEY,
  algorithms: ['RS256'],
}

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await prisma.user.findFirst({
        where: { id: jwt_payload.id },
      })

      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (error) {
      return done(error, false)
    }
  })
)

export default passport
