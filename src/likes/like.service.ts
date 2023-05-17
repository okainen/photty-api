import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './interfaces/like.interface';
import { LikeInput } from './inputs/like.input';

@Injectable()
export class LikeService {
  constructor(@InjectModel('Like') private likeModel: Model<Like>) {}

  async create(input: LikeInput): Promise<Like> {
    const newLike = new this.likeModel(input);
    return newLike.save();
  }

  async findAll(): Promise<Like[]> {
    return this.likeModel.find().exec();
  }

  async findOne(id: string): Promise<Like> {
    return this.likeModel.findById(id);
  }
}
