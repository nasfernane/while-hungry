import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeTagCategory } from '@prisma/client';

@Injectable()
export class FindAllService {
  async findAll(): Promise<RecipeTagCategory[]> {
    const tags = await prisma.recipeTagCategory.findMany({
      include: {
        RecipeTagLabels: true,
      }
    })

    return tags;
  }
}
