import { Module } from '@nestjs/common';
import { FindAllModule } from './useCases/findAll/findAll.module';

@Module({
  imports: [FindAllModule],
})
export class RecipesTagsModule {}
