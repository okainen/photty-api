import { Document } from 'mongoose';

export interface Like extends Document {
  user: string;
  post: string;
  createdAt: Date;
}
