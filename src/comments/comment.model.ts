import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.model';
import { Post } from '../posts/post.model';
import mongoose from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
