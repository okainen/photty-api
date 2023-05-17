import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LikeInput {
  @Field()
  user: string;

  @Field()
  post: string;
}
