import { Injectable } from '@nestjs/common';

// prisma schema
import { RecipeFavorite } from '@prisma/client';

// prisma client
import { prisma } from '@wh/prisma-client';

@Injectable()
export class DeleteService {
  async delete(id: number) {
    const deletedFavorite: RecipeFavorite = await prisma.recipeFavorite.delete({
      where: {
        id
      }
    }) 

    return deletedFavorite;
  }
}
