import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { RecipeTagList } from '@prisma/client';

@Injectable()
export class FindAllService {
  async findAll(): Promise<RecipeTagList[]> {
    const tags = await prisma.recipeTagList.findMany()

    return tags;
  }
}
