import { Module } from '@nestjs/common';
import { CreateModule } from './useCases/create.module';

@Module({
  imports: [
    CreateModule
  ]
})
export class RecipesCommentsModule {}
