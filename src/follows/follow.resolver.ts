import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { FollowType } from './dto/follow.graphql';
import { FollowInput } from './inputs/follow.input';
import { PartialFollowInput } from './inputs/partial-follow.input';

@Resolver(() => FollowType)
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}

  @Query(() => FollowType)
  async follow(@Args('id') id: string) {
    return this.followService.findOne(id);
  }

  @Query(() => [FollowType])
  async follows() {
    return this.followService.findAll();
  }

  @Mutation(() => FollowType)
  async createFollow(@Args('input') input: FollowInput) {
    return this.followService.create(input);
  }

  @Mutation(() => FollowType)
  async deleteFollow(@Args('id') id: string) {
    return this.followService.delete(id);
  }

  @Mutation(() => FollowType)
  async updateFollow(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'input', type: () => PartialFollowInput })
    input: PartialFollowInput,
  ) {
    return this.followService.update(id, input);
  }
}
