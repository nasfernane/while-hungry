import { Module } from '@nestjs/common';
import { LoginGoogleService } from './loginGoogle.service';
import { LoginGoogleController } from './loginGoogle.controller';

@Module({
  controllers: [LoginGoogleController],
  providers: [LoginGoogleService],
})
export class LoginGoogleModule {}
