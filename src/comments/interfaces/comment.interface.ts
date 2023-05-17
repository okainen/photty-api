import { Document } from 'mongoose';
import { User } from '../../users/interfaces/user.interface';
import { Post } from '../../posts/interfaces/post.interface';

export interface Comment extends Document {
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  post: Post;
}
