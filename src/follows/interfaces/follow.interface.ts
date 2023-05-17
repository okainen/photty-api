import { Document } from 'mongoose';

export interface Follow extends Document {
  follower: string;
  following: string;
  createdAt: Date;
}
