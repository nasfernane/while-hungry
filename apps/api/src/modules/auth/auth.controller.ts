import { Controller, Get, Post, Body, Param, Delete, Catch, UseFilters} from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';

@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('/register')
  register(@Body() Param) {
    return this.authService.register(Param);
  }

  @Post('/login')
  login(@Body() Param) {
    return this.authService.login(Param);
  }
}
