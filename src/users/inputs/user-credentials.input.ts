import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCredentials {
  @Field()
  email: string;

  @Field()
  password: string;
}
