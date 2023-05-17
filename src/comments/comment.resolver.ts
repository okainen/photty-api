import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentType } from './dto/comment.graphql';
import { CommentInput } from './inputs/comment.input';
import { PartialCommentInput } from './inputs/partial-comment.input';

@Resolver(() => CommentType)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => [CommentType])
  async comments() {
    return this.commentService.findAll();
  }

  @Query(() => CommentType)
  async comment(@Args('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Mutation(() => CommentType)
  async createComment(@Args('input') input: CommentInput) {
    return this.commentService.create(input);
  }

  @Mutation(() => CommentType)
  async deleteComment(@Args('id') id: string) {
    return this.commentService.delete(id);
  }

  @Mutation(() => CommentType)
  async updateComment(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'input', type: () => PartialCommentInput })
    input: PartialCommentInput,
  ) {
    return this.commentService.update(id, input);
  }
}
