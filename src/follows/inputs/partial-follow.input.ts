import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartialFollowInput {
  @Field(() => String, { nullable: true })
  follower?: string;

  @Field(() => String, { nullable: true })
  following?: string;
}
