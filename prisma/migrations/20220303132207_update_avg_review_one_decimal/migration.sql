/*
  Warnings:

  - You are about to alter the column `avgReview` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,1)`.

*/
-- AlterTable
ALTER TABLE `Recipe` MODIFY `avgReview` DECIMAL(10, 1) NULL;
