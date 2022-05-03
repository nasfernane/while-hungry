import { Module } from '@nestjs/common';
import { CheckModule } from './useCases/check/check.module';
import { UpdateModule } from './useCases/update/update.module';
import { CreateModule } from './useCases/create/create.module';

@Module({
  imports: [CreateModule, UpdateModule, CheckModule],
})
export class ReviewsModule {}
