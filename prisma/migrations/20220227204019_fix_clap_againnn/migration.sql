/*
  Warnings:

  - You are about to drop the column `userClappingId` on the `Clap` table. All the data in the column will be lost.
  - Added the required column `clappedId` to the `Clap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Clap` DROP COLUMN `userClappingId`,
    ADD COLUMN `clappedId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Clap` ADD CONSTRAINT `Clap_clappedId_fkey` FOREIGN KEY (`clappedId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
