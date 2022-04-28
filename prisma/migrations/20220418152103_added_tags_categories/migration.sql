/*
  Warnings:

  - Added the required column `categoryId` to the `RecipeTagLabel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RecipeTagLabel` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `RecipeTagCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RecipeTagLabel` ADD CONSTRAINT `RecipeTagLabel_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `RecipeTagCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
