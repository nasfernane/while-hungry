import { Module } from '@nestjs/common';

import { FindAllModule } from './useCases/findAll/findAll.module';
import { FindAllFilteredModule } from './useCases/findAllFiltered/findAllFiltered.module';
import { CreateModule } from './useCases/create/create.module';
import { DeleteModule } from './useCases/delete/delete.module';

@Module({
  imports: [FindAllModule, FindAllFilteredModule, CreateModule, DeleteModule],
})
export class FavoritesModule {}
