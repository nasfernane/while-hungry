/*
  Warnings:

  - You are about to alter the column `avgReview` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `Recipe` MODIFY `avgReview` DECIMAL(10, 2) NULL;
