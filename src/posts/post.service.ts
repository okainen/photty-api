import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { PostInput } from './inputs/post.input';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}

  async create(input: PostInput): Promise<Post> {
    const newPost = new this.postModel(input);
    return newPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id);
  }

  async delete(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id);
    if (!deletedPost) {
      throw new Error('No Post found with this id');
    }
    return deletedPost;
  }

  async update(id: string, input: Partial<PostInput>): Promise<Post> {
    const updatedPost = await this.postModel.findByIdAndUpdate(id, input, {
      new: true,
    });
    if (!updatedPost) {
      throw new Error('No Post found with this id');
    }
    return updatedPost;
  }
}
