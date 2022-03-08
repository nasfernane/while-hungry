import { Module } from '@nestjs/common';

// use cases modules
import { CheckModule } from './useCases/check/check.module';
import { CreateModule } from './useCases/create/create.module';
import { CountModule } from './useCases/getUserCount/count.module';
@Module({
  imports: [
    CheckModule,
    CreateModule,
    CountModule
  ]
})
export class ClapsModule {}
