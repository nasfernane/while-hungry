import { Module } from '@nestjs/common';
import { FindLastService } from './findLast.service';
import { FindLastController } from './findLast.controller';

@Module({
  controllers: [FindLastController],
  providers: [FindLastService]
})
export class FindLastModule {}
