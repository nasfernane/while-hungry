import { Module } from '@nestjs/common';
import { CreateModule } from './useCases/create/create.module';

@Module({
  imports: [
    CreateModule
  ]
})
export class ShoppingListModule {}
