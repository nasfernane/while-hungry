import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeFavorite } from '@prisma/client';

@Injectable()
export class FindAllFilteredService {
  async findAllFiltered(id: number, filters) {
    const favorites: RecipeFavorite[] = await prisma.recipeFavorite.findMany({
      where: {
        userId: id,
        recipe: {
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
        }
      },
      include: {
        recipe: {
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
        }
      }
    })
    return favorites;
  }
}
