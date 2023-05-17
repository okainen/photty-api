import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { LikeType } from './dto/like.graphql';
import { LikeInput } from './inputs/like.input';
import { PartialLikeInput } from './inputs/partial-like.input';

@Resolver(() => LikeType)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Query(() => LikeType)
  async like(@Args('id') id: string) {
    return this.likeService.findOne(id);
  }

  @Query(() => [LikeType])
  async likes() {
    return this.likeService.findAll();
  }

  @Mutation(() => LikeType)
  async createLike(@Args('input') input: LikeInput) {
    return this.likeService.create(input);
  }

  @Mutation(() => LikeType)
  async deleteLike(@Args('id') id: string) {
    return this.likeService.delete(id);
  }

  @Mutation(() => LikeType)
  async updateLike(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'input', type: () => PartialLikeInput })
    input: PartialLikeInput,
  ) {
    return this.likeService.update(id, input);
  }
}
