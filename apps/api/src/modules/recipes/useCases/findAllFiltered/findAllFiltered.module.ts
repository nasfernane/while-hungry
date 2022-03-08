import { Module } from '@nestjs/common';
import { FindAllFilteredService } from './findAllFiltered.service';
import { FindAllFilteredController } from './findAllFiltered.controller';

@Module({
  controllers: [FindAllFilteredController],
  providers: [FindAllFilteredService]
})
export class FindAllFilteredModule {}
