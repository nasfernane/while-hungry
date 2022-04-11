import { Module } from '@nestjs/common';
import { RegisterModule } from './useCases/register/register.module';
import { LoginModule } from './useCases/login/login.module';
import { UpdatePasswordModule } from './useCases/updatePassword/updatePassword.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    RegisterModule,
    LoginModule,
    UpdatePasswordModule
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard }
  ]
})
export class AuthModule {}
