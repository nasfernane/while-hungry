import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class UpdateService {
  /**
   * update a recipe based on id
   * @param id 
   * @param recipe 
   * @returns updated recipe
   */
  async update(id: number, recipe: Recipe): Promise<Recipe> {
    const updatedRecipe = prisma.recipe.update({
      where: {
        id: id
      },
      data: {
        ...recipe
      }
    })

    return updatedRecipe
  }
}
