import { Module } from '@nestjs/common';
import { ClapsService } from './claps.service';
import { ClapsController } from './claps.controller';

@Module({
  controllers: [ClapsController],
  providers: [ClapsService]
})
export class ClapsModule {}
