import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

@Injectable()
export class DeleteAllService {
  /**
   * Delete all shopping lists and their items for a given user
   * @param {number} userId - The id of the user whose shopping lists you want to delete.
   */
  async deleteAll(userId: number) {
    const shoppingLists = await prisma.shoppingList.findMany({
      where: {
        userId: +userId,
      },
    });

    if (shoppingLists) {
      // delete shopping lists items first
      for (const list of shoppingLists) {
        const count = await prisma.shoppingListItem.deleteMany({
          where: {
            shoppingListId: +list.id,
          },
        });

        // then delete list
        if (count) {
          await prisma.shoppingList.delete({
            where: {
              id: +list.id,
            },
          });
        }
      }
    }

    // check if all lists successfully deleted
    const checkLists = await prisma.shoppingList.findMany({
      where: {
        userId: +userId,
      },
    });

    if (checkLists.length === 0) {
      return { res: 'success' };
    }
  }
}
