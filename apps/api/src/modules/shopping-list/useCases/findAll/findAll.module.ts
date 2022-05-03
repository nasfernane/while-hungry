import { Module } from '@nestjs/common';
import { FindAllService } from './findAll.service';
import { FindAllController } from './findAll.controller';

@Module({
  controllers: [FindAllController],
  providers: [FindAllService],
})
export class FindAllModule {}
