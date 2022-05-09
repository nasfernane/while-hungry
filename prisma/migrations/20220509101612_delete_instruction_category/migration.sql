/*
  Warnings:

  - You are about to drop the `RecipeInstructionCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `RecipeInstruction` DROP FOREIGN KEY `RecipeInstruction_categoryId_fkey`;

-- DropTable
DROP TABLE `RecipeInstructionCategory`;
