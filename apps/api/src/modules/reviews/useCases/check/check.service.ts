import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeReview } from '@prisma/client';

@Injectable()
export class CheckService {
/**
   * check if user already reviewed a recipe
   * @param recipeId 
   * @param userId 
   * @returns review
   */
  async check(recipeId: number, userId: number): Promise<RecipeReview> {
    const review: RecipeReview = await prisma.recipeReview.findFirst({
      where: {
        recipeId: +recipeId,
        authorId: +userId,
      }
    })

    return review;
  }
}
