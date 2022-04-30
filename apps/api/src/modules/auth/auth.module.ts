import { Module } from '@nestjs/common';
import { RegisterModule } from './useCases/register/register.module';
import { LoginModule } from './useCases/login/login.module';
import { UpdatePasswordModule } from './useCases/updatePassword/updatePassword.module';


@Module({
  imports: [
    RegisterModule,
    LoginModule,
    UpdatePasswordModule
  ],
})
export class AuthModule {}
