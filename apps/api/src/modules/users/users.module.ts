import { Module } from '@nestjs/common';
import { UpdateAvatarModule } from './useCases/updateAvatar/updateAvatar.module';
import { UpdateModule } from './useCases/update/update.module';

@Module({
  imports: [
    UpdateModule,
    UpdateAvatarModule
  ]
})
export class UsersModule {}
