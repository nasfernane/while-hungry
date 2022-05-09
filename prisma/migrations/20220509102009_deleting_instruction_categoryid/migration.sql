/*
  Warnings:

  - You are about to drop the column `categoryId` on the `RecipeInstruction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `RecipeInstruction_categoryId_fkey` ON `RecipeInstruction`;

-- AlterTable
ALTER TABLE `RecipeInstruction` DROP COLUMN `categoryId`;
