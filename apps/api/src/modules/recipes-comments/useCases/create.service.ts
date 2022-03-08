import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeComment } from '@prisma/client';

@Injectable()
export class CreateService {
  /**
   * create a new comment 
   * @param comment 
   * @returns new comment
   */
  async create(comment: RecipeComment): Promise<RecipeComment> {
    const newComment: RecipeComment = await prisma.recipeComment.create({
      data: {
        ...comment
      }
    })

    return newComment;
  }
}
