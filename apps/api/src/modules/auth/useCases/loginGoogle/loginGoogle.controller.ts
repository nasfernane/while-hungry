import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { LoginGoogleService } from './loginGoogle.service';
import { HttpExceptionFilter } from '../../../../filters/http-exception.filter';

import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Authentication')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class LoginGoogleController {
  constructor(private readonly service: LoginGoogleService) {}

  @ApiResponse({
    status: 201,
    description: 'The user has been successfully logged.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Throttle(3, 2)
  @Post('/loginGoogle')
  login(@Body() Param) {
    return this.service.login(Param);
  }
}
