import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Follow } from './interfaces/follow.interface';
import { FollowInput } from './inputs/follow.input';

@Injectable()
export class FollowService {
  constructor(@InjectModel('Follow') private followModel: Model<Follow>) {}

  async create(input: FollowInput): Promise<Follow> {
    const newFollow = new this.followModel(input);
    return newFollow.save();
  }

  async findAll(): Promise<Follow[]> {
    return this.followModel.find().exec();
  }

  async findOne(id: string): Promise<Follow> {
    return this.followModel.findById(id);
  }
}
