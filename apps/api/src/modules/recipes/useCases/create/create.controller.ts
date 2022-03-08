import { Controller, Post, Body } from '@nestjs/common';
import { CreateService } from './create.service';

import { Recipe } from '@prisma/client';

@Controller('recipes')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  @Post()
  create(@Body() recipe: Recipe) {
    return this.service.create(recipe);
  }
}
