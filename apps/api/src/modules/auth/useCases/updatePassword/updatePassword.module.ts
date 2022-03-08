import { Module } from '@nestjs/common';
import { UpdatePasswordService } from './updatePassword.service';
import { UpdatePasswordController } from './updatePassword.controller';

@Module({
  controllers: [UpdatePasswordController],
  providers: [UpdatePasswordService]
})
export class UpdatePasswordModule {}