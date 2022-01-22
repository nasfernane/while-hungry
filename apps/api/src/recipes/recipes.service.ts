import { Injectable } from '@nestjs/common';
// import { CreateRecipeDto } from './dto/create-recipe.dto';
// import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from '@prisma/client';

import  { prisma } from '@wh/prisma-client';

@Injectable()
export class RecipesService {

  create(recipe: Recipe) {
    console.log(recipe);
  }

  findAll(): Promise<Recipe[]> {
    return prisma.recipe.findMany({
      include: {
        author: true,
        recipeInstructions: true,
        requiredIngredients: true,
        requiredUstensils: true,
        recipeTags: {
          include: {
            tag: true,
          }
        },
        recipeComments: true,
        recipeReviews: true,
        recipeFavorites: true,
      }
    })
  }

  findOne(id: number): Promise<Recipe> {
    return prisma.recipe.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, recipe: Recipe) {
    return prisma.recipe.update({
      where: {
        id: id
      },
      data: recipe
    })
  }

  remove(id: number) {
    return prisma.recipe.delete({
      where: {
        id: id
      },
    })
  }
}
