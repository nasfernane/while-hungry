import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() Param) {
    return this.authService.register(Param);
  }

  @Post('/login')
  login(@Body() Param) {
    return this.authService.login(Param);
  }
}
