import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefinitionsService } from './definitions.service';
import { CreateDefinitionDto } from './dto/create-definition.dto';
import { UpdateDefinitionDto } from './dto/update-definition.dto';

import { Definition } from '@prisma/client';

@Controller('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Post()
  create(@Body() definition: Definition) {
    return this.definitionsService.create(definition);
  }

  @Get()
  findAll() {
    return this.definitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.definitionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() definition: Definition) {
    return this.definitionsService.update(+id, definition);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.definitionsService.remove(+id);
  }
}
