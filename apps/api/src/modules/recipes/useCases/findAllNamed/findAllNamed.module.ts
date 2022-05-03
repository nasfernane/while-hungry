import { Module } from '@nestjs/common';
import { FindAllNamedService } from './findAllNamed.service';
import { FindAllNamedController } from './findAllNamed.controller';

@Module({
  controllers: [FindAllNamedController],
  providers: [FindAllNamedService],
})
export class FindAllNamedModule {}
