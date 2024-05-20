/*
  Warnings:

  - Added the required column `imageUrl` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reactions` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reader" DROP CONSTRAINT "Reader_readerFollowToAuthorsId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reader" ADD COLUMN     "reactions" JSONB NOT NULL,
ALTER COLUMN "readerFollowToAuthorsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reader" ADD CONSTRAINT "Reader_readerFollowToAuthorsId_fkey" FOREIGN KEY ("readerFollowToAuthorsId") REFERENCES "ReaderFollowToAuthors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
