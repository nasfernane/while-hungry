import { Module } from '@nestjs/common';
import { GetPictureController } from './getPicture.controller';

@Module({
  controllers: [GetPictureController],
})
export class GetPictureModule {}
