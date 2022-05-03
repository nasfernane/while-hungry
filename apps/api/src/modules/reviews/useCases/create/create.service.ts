import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeReview } from '@prisma/client';

@Injectable()
export class CreateService {
  async create(review: RecipeReview): Promise<RecipeReview> {
    const newReview: RecipeReview = await prisma.recipeReview.create({
      data: {
        ...review,
      },
    });

    return newReview;
  }
}
