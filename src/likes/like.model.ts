import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeDocument = Like & Document;

@Schema()
export class Like {
  @Prop({ type: String, ref: 'User', required: true })
  user: string;

  @Prop({ type: String, ref: 'Post', required: true })
  post: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
