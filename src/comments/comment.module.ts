import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.model';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
  ],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
