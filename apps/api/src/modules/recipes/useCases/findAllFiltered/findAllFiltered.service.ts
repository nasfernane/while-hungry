import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class FindAllFilteredService {
   /**
   * return all recipes based on filters
   * @param filters 
   * @returns an array of Recipe
   */
  async findAllFiltered(filters: any): Promise<Recipe[]> {
    const recipes = await prisma.recipe.findMany({
      where: {
        AND: [
          {
            difficulty: filters.difficulty ? filters.difficulty : undefined,
          },
          {
            recipeTags: {
              some: {
                tag: {
                  name: filters.tag ? filters.tag : undefined,
                }
              }
            }
          },
          { 
            avgReview: filters.rating ? +filters.rating : undefined,
          }
        ]
      },
      include: {
        author: true,
        recipeInstructions: true,
        recipeNotes: true,
        requiredIngredients: true,
        requiredUstensils: true,
        recipeTags: {
          include: {
            tag: true,
          },
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
