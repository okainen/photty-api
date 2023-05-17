import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowInput {
  @Field()
  follower: string;

  @Field()
  following: string;
}
