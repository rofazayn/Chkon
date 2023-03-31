import { Field, ObjectType } from 'type-graphql'
import { User } from '../graphql/type-graphql'

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  accessToken?: string

  @Field({ nullable: true })
  refreshToken?: string

  @Field({ nullable: true })
  user?: User
}

@ObjectType()
export class RefreshTokensResponse {
  @Field({ nullable: true })
  accessToken?: string

  @Field({ nullable: true })
  refreshToken?: string
}
