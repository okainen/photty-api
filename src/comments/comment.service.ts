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

  async delete(id: string): Promise<Comment> {
    const deletedComment = await this.commentModel.findByIdAndDelete(id);
    if (!deletedComment) {
      throw new Error('No Comment found with this id');
    }
    return deletedComment;
  }

  async update(id: string, input: Partial<CommentInput>): Promise<Comment> {
    const updatedComment = await this.commentModel.findByIdAndUpdate(
      id,
      input,
      {
        new: true,
      },
    );
    if (!updatedComment) {
      throw new Error('No Comment found with this id');
    }
    return updatedComment;
  }
}
