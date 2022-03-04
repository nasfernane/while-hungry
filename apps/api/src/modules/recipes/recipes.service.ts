import { Injectable } from '@nestjs/common';

// utils
import  { prisma } from '@wh/prisma-client';

// schemas
import { Recipe } from '@prisma/client';

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
    })
  }

  async findAllWithFilters(filters: any): Promise<Recipe[]> {
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
        requiredIngredients: {
          include: {
            Ingredient: true,
          }
        },
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

  // return sum of propertiers inside objets in an array
  propSum(items, prop) {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
  }


  findOne(id: number): Promise<Recipe> {
    return prisma.recipe.findUnique({
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
  }

  findLast(): Promise<Recipe[]> {
    return prisma.recipe.findMany({
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
  }

  update(id: number, recipe: Recipe): Promise<Recipe> {
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

  addFavorite(recipeId: number, userId: number) {
    const fav = prisma.recipeFavorite.create({
      data: {
        recipeId,
        userId,
      }
    })

    return fav;
  }

  removeFavorite(recipeId: number, userId: number) {
    const fav = prisma.recipeFavorite.deleteMany({
      where: {
        userId: userId,
        recipeId: recipeId,
      }
    })

    return fav;
  }

  getAuthorCount(authorId: number) {
    const count = prisma.recipe.count({
      where: {
        authorId: +authorId,
      }
    })

    return count;
  }
}
