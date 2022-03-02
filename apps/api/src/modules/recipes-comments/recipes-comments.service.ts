import { Injectable } from '@nestjs/common';

import  { prisma } from '@wh/prisma-client';
import { RecipeComment } from '@prisma/client';

@Injectable()
export class RecipesCommentsService {
  create(comment: RecipeComment) {
    return prisma.recipeComment.create({
      data: {
        ...comment
      }
    })
  }

  findAll() {
    return `This action returns all recipesComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipesComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipesComment`;
  }
}
