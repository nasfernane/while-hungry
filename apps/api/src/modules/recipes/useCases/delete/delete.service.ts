import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { Recipe } from '@prisma/client';

@Injectable()
export class DeleteService {
  delete(id: number): Promise<Recipe> {
    return prisma.recipe.delete({
      where: {
        id: id,
      },
    });
  }
}
