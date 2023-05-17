import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowSchema } from './follow.model';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Follow', schema: FollowSchema }]),
  ],
  providers: [FollowService, FollowResolver],
})
export class FollowModule {}
