import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class FindAllNamedService {
  /**
   * Find all recipes that have a name that contains the given string
   * @param {string} name - The name of the recipe.
   * @returns An array of Recipe objects.
   */
  async findAllNamed(name: string): Promise<Recipe[]> {
    const recipes = await prisma.recipe.findMany({
      where: {
        name: {
          contains: name,
        },
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
