import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FollowDocument = Follow & Document;

@Schema()
export class Follow {
  @Prop({ type: String, ref: 'User', required: true })
  follower: string;

  @Prop({ type: String, ref: 'User', required: true })
  following: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
