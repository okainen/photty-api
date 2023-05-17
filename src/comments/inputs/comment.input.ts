import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CommentInput {
  @Field()
  text: string;

  @Field()
  user: string;

  @Field()
  post: string;
}
