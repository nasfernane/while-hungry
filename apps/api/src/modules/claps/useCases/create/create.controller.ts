import { Controller, Post, Body } from '@nestjs/common';
import { CreateService } from './create.service';
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
import { Clap } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Claps')
@Controller('claps')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  @ApiResponse({ status: 201, description: 'The clap has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
  create(@Body() clap: Clap) {
    return this.service.create(clap);
  }
}
