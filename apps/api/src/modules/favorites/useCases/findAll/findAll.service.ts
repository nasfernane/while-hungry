import { Injectable } from '@nestjs/common';

import { RecipeFavorite } from '@prisma/client';
import { prisma } from '@wh/prisma-client';

@Injectable()
export class FindAllService {
  /**
   * find all favorite recipes bases on user id
   * @param id number
   * @returns an array of favorites
   */
  async findAll(id: number) {
    const favorites: RecipeFavorite[] = await prisma.recipeFavorite.findMany({
      where: {
        userId: id
      },
      include: {
        recipe: {
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
            },
            recipeReviews: true,
            recipeFavorites: true,
          }
        }
      }
    })

    return favorites;
  }
}
