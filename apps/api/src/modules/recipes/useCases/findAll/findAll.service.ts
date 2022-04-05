import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class FindAllService {
  async findAll(): Promise<Recipe[]> {
    const recipes = await prisma.recipe.findMany({
      include: {
        author: true,
        recipeInstructions: true,
        recipeNotes: true,
        requiredIngredients: true,
        requiredUstensils: true,
        recipeTags: {
          include: {
            tag: true,
          }
        },
        recipeComments: {
          include: {
            author: true,
          },
        },
        recipeReviews: true,
        recipeFavorites: true,
      }
    })

    return recipes;
  }
}
