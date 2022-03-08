import { Controller, Get, Post, Body, Param, Delete, Catch, UseFilters} from '@nestjs/common';
import { UpdatePasswordService } from './updatePassword.service';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class UpdatePasswordController {
  constructor(
    private readonly service: UpdatePasswordService,
  ) {}

  @ApiResponse({ status: 201, description: 'The password has been successfully updated.'})
  @Post('/pwupdate/:id')
  updatePassword(@Param('id') id: string, @Body() passwords: object) {
    return this.service.updatePassword(+id, passwords);
  }
}