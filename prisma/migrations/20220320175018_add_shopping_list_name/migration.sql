/*
  Warnings:

  - Added the required column `recipe` to the `ShoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShoppingList` ADD COLUMN `recipe` VARCHAR(191) NOT NULL;
