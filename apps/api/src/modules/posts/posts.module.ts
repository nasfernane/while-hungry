import { Module } from '@nestjs/common';
import { CreateModule } from './useCases/create/create.module';
import { FindModule } from './useCases/find/find.module';
import { FindAllModule } from './useCases/findAll/findAll.module';
import { FindLastModule } from './useCases/findLast/findLast.module';
import { UpdateModule } from './useCases/update/update.module';

@Module({
  imports: [
    CreateModule,
    FindLastModule,
    FindModule,
    FindAllModule,
    UpdateModule
  ]
})
export class PostsModule {}
