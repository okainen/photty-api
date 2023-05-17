import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.model';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  providers: [PostService, PostResolver],
})
export class PostModule {}
