import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

// service
import { CreateService } from './create.service';

// schema
import { Definition } from '@prisma/client';

@ApiTags('Definitions')
@Controller('definitions')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  /**
   * Create a new definition
   * @param definition
   * @returns definition
   */
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() definition: Definition) {
    return this.service.create(definition);
  }
}
