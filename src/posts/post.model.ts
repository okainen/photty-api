import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ type: String, ref: 'User', required: true })
  user: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  caption: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
