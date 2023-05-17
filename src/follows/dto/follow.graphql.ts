import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FollowType {
  @Field(() => ID)
  id: string;

  @Field()
  follower: string;

  @Field()
  following: string;

  @Field()
  createdAt: Date;
}
