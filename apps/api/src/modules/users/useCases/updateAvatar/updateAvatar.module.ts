import { Module } from '@nestjs/common';
import { UpdateAvatarService } from './updateAvatar.service';
import { UpdateAvatarController } from './updateAvatar.controller';

@Module({
  controllers: [UpdateAvatarController],
  providers: [UpdateAvatarService],
})
export class UpdateAvatarModule {}
