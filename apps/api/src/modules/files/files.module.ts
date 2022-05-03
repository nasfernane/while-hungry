import { Module } from '@nestjs/common';

// use cases modules
import { GetPictureModule } from './useCases/getPicture/getPicture.module';

@Module({
  imports: [GetPictureModule],
})
export class FilesModule {}
