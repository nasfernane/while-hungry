/*
  Warnings:

  - You are about to drop the column `Quantity` on the `ShoppingListItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `ShoppingListItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShoppingListItem` DROP COLUMN `Quantity`,
    ADD COLUMN `quantity` DECIMAL(10, 2) NOT NULL;
