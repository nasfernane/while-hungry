import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Prisma, ShoppingList } from '@prisma/client';

@Injectable()
export class CreateService {
  /**
   * create a new comment 
   * @param comment 
   * @returns new comment
   */
  async create(shoppinglist: any) {
    console.log(shoppinglist)
    const list = 
      {
        recipeId: shoppinglist.recipeId,
        userId: +shoppinglist.userId,
        shoppingListItems: {
          create: [
            ...shoppinglist.ingredients
          ]
        } 
      }
    const newList = await prisma.shoppingList.create({data: list});

    return newList;
  }
}
