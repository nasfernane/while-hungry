/*
  Warnings:

  - You are about to drop the column `recipe` on the `ShoppingList` table. All the data in the column will be lost.
  - Added the required column `recipeId` to the `ShoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShoppingList` DROP COLUMN `recipe`,
    ADD COLUMN `recipeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ShoppingList` ADD CONSTRAINT `ShoppingList_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
