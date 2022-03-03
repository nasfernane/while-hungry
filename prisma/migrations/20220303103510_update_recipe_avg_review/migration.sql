/*
  Warnings:

  - You are about to drop the column `avgRating` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Recipe` DROP COLUMN `avgRating`,
    ADD COLUMN `avgReview` INTEGER NULL;
