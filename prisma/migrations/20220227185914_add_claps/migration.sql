-- CreateTable
CREATE TABLE `Clap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userClappingId` INTEGER NOT NULL,
    `userClappedId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Clap_userClappingId_key`(`userClappingId`),
    UNIQUE INDEX `Clap_userClappedId_key`(`userClappedId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Clap` ADD CONSTRAINT `Clap_userClappingId_fkey` FOREIGN KEY (`userClappingId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clap` ADD CONSTRAINT `Clap_userClappedId_fkey` FOREIGN KEY (`userClappedId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
