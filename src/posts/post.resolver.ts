import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostType } from './dto/post.graphql';
import { PostInput } from './inputs/post.input';

@Resolver(() => PostType)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => PostType)
  async post(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Query(() => [PostType])
  async posts() {
    return this.postService.findAll();
  }

  @Mutation(() => PostType)
  async createPost(@Args('input') input: PostInput) {
    return this.postService.create(input);
  }
}
