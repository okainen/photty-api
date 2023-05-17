import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PartialPostInput {
  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => String, { nullable: true })
  image?: string;
}
