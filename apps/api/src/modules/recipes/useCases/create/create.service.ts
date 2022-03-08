import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class CreateService {
  async create(recipe: Recipe): Promise<Recipe> {
    const newRecipe = await prisma.recipe.create({
      data: {
        ...recipe
      }
    })

    return newRecipe;
  }
  
}
