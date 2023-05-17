import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './dto/user.graphql';
import { UserInput } from './inputs/user.input';
import { PartialUserInput } from './inputs/partial-user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => UserType)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => UserType)
  async deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }

  @Mutation(() => UserType)
  async updateUser(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'input', type: () => PartialUserInput })
    input: PartialUserInput,
  ) {
    return this.userService.update(id, input);
  }
}
