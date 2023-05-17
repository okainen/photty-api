import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeSchema } from './like.model';
import { LikeService } from './like.service';
import { LikeResolver } from './like.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }])],
  providers: [LikeService, LikeResolver],
})
export class LikeModule {}
