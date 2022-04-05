/*
  Warnings:

  - You are about to drop the column `ingredientId` on the `RequiredIngredient` table. All the data in the column will be lost.
  - Added the required column `name` to the `RequiredIngredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `RequiredIngredient` DROP FOREIGN KEY `RequiredIngredient_ingredientId_fkey`;

-- AlterTable
ALTER TABLE `RequiredIngredient` DROP COLUMN `ingredientId`,
    ADD COLUMN `name` VARCHAR(25) NOT NULL;
