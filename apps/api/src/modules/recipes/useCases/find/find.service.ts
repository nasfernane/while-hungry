import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class FindService {
  async find(id: number): Promise<Recipe> {
    const recipe: Recipe = await prisma.recipe.findUnique({
      where: {
        id: id
      }, 
      include: {
        author: true,
        recipeInstructions: true,
        recipeNotes: true,
        requiredIngredients: {
          include: {
            Ingredient: true,
          }
        },
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
          orderBy: {
            createdAt: 'desc',
          }
        },
        recipeReviews: true,
        recipeFavorites: true,
      }
    })

    return recipe;
  }
}
