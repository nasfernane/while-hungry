import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

import { RecipeFavorite } from '@prisma/client';
import { prisma } from '@wh/prisma-client';

@Injectable()
export class FavoritesService {
  create(createFavoriteDto: CreateFavoriteDto) {
    return createFavoriteDto;
  }

  /**
   * finds all recipe favorites based on user id
   * @param id number
   * @returns array of recipes favorites
   */
  async findAll(id: number) {
    const favorites = await prisma.recipeFavorite.findMany({
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

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return updateFavoriteDto;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
