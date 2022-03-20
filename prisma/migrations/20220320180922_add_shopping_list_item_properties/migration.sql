/*
  Warnings:

  - Added the required column `Quantity` to the `ShoppingListItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ShoppingListItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `ShoppingListItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ShoppingListItem` ADD COLUMN `Quantity` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL;
