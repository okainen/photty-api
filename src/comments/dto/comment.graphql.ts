import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentType {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  user: string;

  @Field()
  post: string;
}
