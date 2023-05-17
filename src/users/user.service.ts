import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';
import { UserCredentials } from './inputs/user-credentials.input';

const SALT = 10;
const SECRET_KEY = 'secret';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(input: UserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, SALT);
    const newUser = new this.userModel({
      ...input,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async login({ email, password }: UserCredentials): Promise<string> {
    const user = await this.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate JWT token
      return jwt.sign({ userId: user.id }, SECRET_KEY);
    } else {
      throw new UnauthorizedException();
    }
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error('No User found with this id');
    }
    return deletedUser;
  }

  async update(id: string, input: Partial<UserInput>): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, input, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error('No User found with this id');
    }
    return updatedUser;
  }
}
