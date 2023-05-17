import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './interfaces/comment.interface';
import { CommentInput } from './inputs/comment.input';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<Comment>) {}

  async create(input: CommentInput): Promise<Comment> {
    const newComment = new this.commentModel(input);
    return newComment.save();
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findById(id);
  }
}
