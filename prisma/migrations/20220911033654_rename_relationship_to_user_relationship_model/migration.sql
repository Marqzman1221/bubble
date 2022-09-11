/*
  Warnings:

  - You are about to drop the `Relationship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Relationship`;

-- CreateTable
CREATE TABLE `UserRelationship` (
    `id` VARCHAR(191) NOT NULL,
    `ownerId` VARCHAR(191) NOT NULL,
    `subjectId` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
