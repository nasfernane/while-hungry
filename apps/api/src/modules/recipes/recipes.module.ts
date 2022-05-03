import { Module } from '@nestjs/common';

// use cases modules
import { AuthorCountModule } from './useCases/authorCount/authorCount.module';
import { CreateModule } from './useCases/create/create.module';
import { DeleteModule } from './useCases/delete/delete.module';
import { FindModule } from './useCases/find/find.module';
import { FindAllModule } from './useCases/findAll/findAll.module';
import { FindAllFilteredModule } from './useCases/findAllFiltered/findAllFiltered.module';
import { FindLastModule } from './useCases/findLast/findLast.module';
import { UpdateModule } from './useCases/update/update.module';
import { FindAllNamedModule } from './useCases/findAllNamed/findAllNamed.module';

@Module({
  imports: [
    AuthorCountModule,
    CreateModule,
    DeleteModule,
    FindLastModule,
    FindAllModule,
    FindAllFilteredModule,
    UpdateModule,
    FindModule,
    FindAllNamedModule,
  ],
})
export class RecipesModule {}
