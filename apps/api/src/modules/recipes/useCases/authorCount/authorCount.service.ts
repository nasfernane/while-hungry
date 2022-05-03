import { Injectable } from '@nestjs/common';

// utils
import { prisma } from '@wh/prisma-client';

@Injectable()
export class AuthorCountService {
  /**
   * get recipe count based on user id
   * @param authorId
   * @returns number
   */
  async getAuthorCount(authorId: number) {
    const count = await prisma.recipe.count({
      where: {
        authorId: +authorId,
      },
    });

    return count;
  }
}
