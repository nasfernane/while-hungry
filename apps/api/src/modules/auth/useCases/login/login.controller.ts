import { Controller, Get, Post, Body, Param, Delete, Catch, UseFilters} from '@nestjs/common';
import { LoginService } from './login.service';
import { HttpExceptionFilter } from '../../../../filters/http-exception.filter';

import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class LoginController {
  constructor(
    private readonly service: LoginService
  ) {}

  @ApiResponse({ status: 201, description: 'The user has been successfully logged.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post('/login')
  login(@Body() Param) {
    return this.service.login(Param);
  }
}