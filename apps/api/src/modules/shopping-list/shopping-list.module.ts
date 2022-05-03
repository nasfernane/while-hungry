import { Module } from '@nestjs/common';
import { CreateModule } from './useCases/create/create.module';
import { FindAllModule } from './useCases/findAll/findAll.module';
import { DeleteAllModule } from './useCases/deleteAll/deleteAll.module';
import { DeleteModule } from './useCases/delete/delete.module';

@Module({
  imports: [CreateModule, FindAllModule, DeleteAllModule, DeleteModule],
})
export class ShoppingListModule {}
