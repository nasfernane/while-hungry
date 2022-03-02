import { Injectable } from '@nestjs/common';

import  { prisma } from '@wh/prisma-client';
import { RecipeReview } from '@prisma/client';


@Injectable()
export class ReviewsService {
  create(review: RecipeReview) {
    const newReview = prisma.recipeReview.create({
      data: {
        recipeId: review.recipeId,
        authorId: review.authorId,
        review: review.review,
      }
    })

    return newReview;
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, review: RecipeReview) {
    return prisma.recipeReview.update({
      where: {
        id: id,
      },
      data: {
        ...review
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }

  checkIfReviewed(recipeId: number, userId: number) {
    return prisma.recipeReview.findFirst({
      where: {
        recipeId: +recipeId,
        authorId: +userId,
      }
    })
  }
}
