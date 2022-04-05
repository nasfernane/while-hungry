import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';
import * as fs from 'fs-extra';

@Injectable()
export class FindAllService {
  async findAll(): Promise<Recipe[]> {
    // await fs.promises.readdir(process.env.STORAGE + '/assets/pictures').then(async (data) => {
    //   console.log('data');
    //   console.log(data);
    // })
    // test
    console.log(process.env.STORAGE);
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
