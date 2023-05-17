import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartialCommentInput {
  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => String, { nullable: true })
  post?: string;
}
