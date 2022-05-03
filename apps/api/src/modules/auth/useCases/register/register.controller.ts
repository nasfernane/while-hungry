import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { RegisterService } from './register.service';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Authentication')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class RegisterController {
  constructor(private readonly service: RegisterService) {}

  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Throttle(3, 2)
  @Post('/register')
  async register(@Body() Param) {
    return this.service.register(Param);
  }
}
