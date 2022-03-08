import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class FindLastService {
  /**
   * return last 3 FindLast posted
   * @returns an array of Recipe
   */
  async findLast(): Promise<Recipe[]> {
    const recipes = await prisma.recipe.findMany({
      orderBy: {
        createdAt: 'desc',
      }, 
      take: 3,
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

    return recipes;
  }

}
