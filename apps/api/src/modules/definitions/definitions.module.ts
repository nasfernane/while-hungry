import { Module } from '@nestjs/common';

// use cases modules
import { CreateModule } from './useCases/create/create.module';
import { DeleteModule } from './useCases/delete/delete.module';
import { FindModule } from './useCases/find/find.module';
import { FindAllModule } from './useCases/findAll/findAll.module';
import { UpdateModule } from './useCases/update/update.module';

@Module({
  imports: [
    CreateModule,
    DeleteModule,
    FindModule,
    FindAllModule,
    UpdateModule,
  ]
})
export class DefinitionsModule {}
