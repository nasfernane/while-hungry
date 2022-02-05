import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
// import { CreateRecipeDto } from './dto/create-recipe.dto';
// import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from '@prisma/client';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() recipe: Recipe) {
    return this.recipesService.create(recipe);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() recipe: Recipe) {
    return this.recipesService.update(+id, recipe);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}