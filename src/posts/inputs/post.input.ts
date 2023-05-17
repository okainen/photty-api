import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostInput {
  @Field()
  user: string;

  @Field()
  caption: string;

  @Field()
  image: string;
}
