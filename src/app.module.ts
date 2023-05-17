import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { PostModule } from './posts/post.module';
import { LikeModule } from './likes/like.module';
import { FollowModule } from './follows/follow.module';
import { ApolloDriver } from '@nestjs/apollo';
import { CommentModule } from './comments/comment.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot(
      'mongodb://photty_admin:123456@localhost:27017/photty',
    ),
    UserModule,
    PostModule,
    LikeModule,
    FollowModule,
    CommentModule,
  ],
})
export class AppModule {}
