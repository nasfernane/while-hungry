import { Injectable } from '@nestjs/common';

// prisma schema
import { ShoppingList } from '@prisma/client';

// prisma client
import  { prisma } from '@wh/prisma-client';

@Injectable()
export class FindAllService {
  /**
   * get all posts
   * @returns an array of Post
   */
  async findAll(userId: number): Promise<ShoppingList[]> {
    const shoppingLists = await prisma.shoppingList.findMany({
      where: {
        userId: +userId
      },
      include: {
        recipe: true,
        shoppingListItems: true
      }
    })

    return shoppingLists;
  }
}
