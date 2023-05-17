import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartialLikeInput {
  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  post?: string;
}
