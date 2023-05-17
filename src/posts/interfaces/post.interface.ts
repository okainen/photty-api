import { Document } from 'mongoose';

export interface Post extends Document {
  user: string;
  image: string;
  caption?: string;
  createdAt: Date;
  updatedAt: Date;
}
