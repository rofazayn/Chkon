import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  accessToken?: string

  @Field({ nullable: true })
  refreshToken?: string
}

@ObjectType()
export class RefreshTokensResponse {
  @Field({ nullable: true })
  accessToken?: string

  @Field({ nullable: true })
  refreshToken?: string
}
