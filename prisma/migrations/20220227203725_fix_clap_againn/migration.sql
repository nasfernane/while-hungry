/*
  Warnings:

  - You are about to drop the column `authorId` on the `Clap` table. All the data in the column will be lost.
  - Added the required column `clapperId` to the `Clap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Clap` DROP FOREIGN KEY `Clap_authorId_fkey`;

-- AlterTable
ALTER TABLE `Clap` DROP COLUMN `authorId`,
    ADD COLUMN `clapperId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Clap` ADD CONSTRAINT `Clap_clapperId_fkey` FOREIGN KEY (`clapperId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
