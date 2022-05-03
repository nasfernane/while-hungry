import { Injectable } from '@nestjs/common';

// prisma schema
import { RecipeFavorite } from '@prisma/client';

// prisma client
import { prisma } from '@wh/prisma-client';

@Injectable()
export class CreateService {
  async create(favorite: RecipeFavorite) {
    const newFavorite: RecipeFavorite = await prisma.recipeFavorite.create({
      data: {
        ...favorite,
      },
    });

    if (newFavorite) {
      return newFavorite;
    }
  }
}
