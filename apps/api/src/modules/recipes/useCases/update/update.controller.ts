import { Controller, Body, Patch, Param } from '@nestjs/common';
import { UpdateService } from './update.service';

import { Recipe } from '@prisma/client';

@Controller('recipes')
export class UpdateController {
  constructor(private readonly service: UpdateService) {}

  /**
   * update a recipe based on id
   * @param id
   * @param recipe
   * @returns updated recipe
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() recipe: Recipe) {
    return this.service.update(+id, recipe);
  }
}
