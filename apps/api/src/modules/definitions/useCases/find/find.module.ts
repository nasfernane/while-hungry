import { Module } from '@nestjs/common';
import { FindService } from './find.service';
import { FindController } from './find.controller';

@Module({
  controllers: [FindController],
  providers: [FindService]
})
export class FindModule {}