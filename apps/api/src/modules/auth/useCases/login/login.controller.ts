import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { LoginService } from './login.service';
import { HttpExceptionFilter } from '../../../../filters/http-exception.filter';

import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Authentication')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @ApiResponse({
    status: 201,
    description: 'The user has been successfully logged.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Throttle(3, 2)
  @Post('/login')
  login(@Body() Param) {
    return this.service.login(Param);
  }
}
