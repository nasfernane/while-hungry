import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeReview } from '@prisma/client';


@Injectable()
export class UpdateService {

  /**
   * update a review based on id
   * @param id 
   * @param review 
   * @returns updated review
   */
  async update(id: number, review: RecipeReview) {
    const updatedReview = await prisma.recipeReview.update({
      where: {
        id: id,
      },
      data: {
        ...review
      }
    })

    return updatedReview;
  }
}
