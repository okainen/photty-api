import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LikeType {
  @Field(() => ID)
  id: string;

  @Field()
  user: string;

  @Field()
  post: string;

  @Field()
  createdAt: Date;
}
