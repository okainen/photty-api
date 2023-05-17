import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './dto/user.graphql';
import { UserInput } from './inputs/user.input';

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
}
