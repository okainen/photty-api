import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostType {
  @Field(() => ID)
  id: string;

  @Field()
  user: string;

  @Field()
  image: string;

  @Field()
  caption: string;

  @Field()
  createdAt: Date;
}
