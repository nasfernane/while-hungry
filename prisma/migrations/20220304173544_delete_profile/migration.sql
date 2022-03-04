/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('Creator', 'Admin', 'Moderator', 'User') NOT NULL DEFAULT 'User';

-- DropTable
DROP TABLE `Profile`;
