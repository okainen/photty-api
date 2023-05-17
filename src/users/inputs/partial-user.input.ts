import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartialUserInput {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}
