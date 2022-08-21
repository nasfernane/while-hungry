import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

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
    const tags = []
    if (filters.tags && filters.tags.length > 0) {
      for (const tag of filters.tags) tags.push(tag.id)
    }
    
    const recipes = await prisma.recipe.findMany({
      where: {
        AND: [
          {
            author: {
              nickname: {
                contains: filters.authorName ?? undefined,
              }
            }
          },
          {
            name: {
              contains: filters.recipeName ?? undefined,
            }
          },
          {
            difficulty: filters.difficulty ? filters.difficulty : undefined,
          },
          {
            recipeTags: {
              some: {
                tagId: {
                  in: tags.length > 0 ? tags : undefined,
                }
              } 
            },
          },
          {
            avgReview: filters.rating ? +filters.rating : undefined,
          },
        ],
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
      },
    });

    return recipes;
  }
}
