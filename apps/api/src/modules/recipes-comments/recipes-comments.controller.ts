import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// service
import { RecipesCommentsService } from './recipes-comments.service';

// schema
import { RecipeComment } from '@prisma/client';

@Controller('recipes-comments')
export class RecipesCommentsController {
  constructor(private readonly recipesCommentsService: RecipesCommentsService) {}

  @Post()
  create(@Body() comment: RecipeComment) {
    return this.recipesCommentsService.create(comment);
  }

  @Get()
  findAll() {
    return this.recipesCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesCommentsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesCommentsService.remove(+id);
  }
}
