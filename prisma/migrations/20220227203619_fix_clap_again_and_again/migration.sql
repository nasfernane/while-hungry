/*
  Warnings:

  - You are about to drop the column `userClappedId` on the `Clap` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Clap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Clap` DROP FOREIGN KEY `Clap_userClappedId_fkey`;

-- AlterTable
ALTER TABLE `Clap` DROP COLUMN `userClappedId`,
    ADD COLUMN `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Clap` ADD CONSTRAINT `Clap_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
