import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

@Injectable()
export class DeleteService {
 
  async delete(id: number) {
    // delete list items first
    const count = await prisma.shoppingListItem.deleteMany({
      where: {
        shoppingListId: id
      },
    })

    // then delete list
    if (count) {
      const deletedList = await prisma.shoppingList.delete({
        where: {
          id
        }
      })

      return deletedList;
    }

  }
}
