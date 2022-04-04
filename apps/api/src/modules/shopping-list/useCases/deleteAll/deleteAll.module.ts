import { Module } from '@nestjs/common';
import { DeleteAllService } from './deleteAll.service';
import { DeleteAllController } from './deleteAll.controller';

@Module({
  controllers: [DeleteAllController],
  providers: [DeleteAllService]
})
export class DeleteAllModule {}
