/*
  Warnings:

  - You are about to drop the column `accountId` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `readerId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `iconType` on the `Reaction` table. All the data in the column will be lost.
  - You are about to drop the `_FollowedAuthors` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[readerId]` on the table `ArticleList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[readerId]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[articleId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[readerFollowToAuthorsId]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reactions` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readerId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Reaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readerFollowToAuthorsId` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_readerId_fkey";

-- DropForeignKey
ALTER TABLE "_FollowedAuthors" DROP CONSTRAINT "_FollowedAuthors_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowedAuthors" DROP CONSTRAINT "_FollowedAuthors_B_fkey";

-- DropIndex
DROP INDEX "Author_accountId_key";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "username" DROP DEFAULT,
ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "password" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "reactions" JSONB NOT NULL,
ADD COLUMN     "tags" TEXT NOT NULL,
ALTER COLUMN "title" DROP DEFAULT,
ALTER COLUMN "description" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ArticleList" ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "accountId",
ADD COLUMN     "readerFollowToAuthorsIds" TEXT[],
ADD COLUMN     "readerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "readerId",
ADD COLUMN     "articleId" TEXT NOT NULL,
ADD COLUMN     "authorId" TEXT NOT NULL,
ALTER COLUMN "content" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "iconType",
ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reader" ADD COLUMN     "readerFollowToAuthorsId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_FollowedAuthors";

-- CreateTable
CREATE TABLE "ReaderFollowToAuthors" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ReaderFollowToAuthors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorToReaderFollowToAuthors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToReaderFollowToAuthors_AB_unique" ON "_AuthorToReaderFollowToAuthors"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToReaderFollowToAuthors_B_index" ON "_AuthorToReaderFollowToAuthors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleList_readerId_key" ON "ArticleList"("readerId");

-- CreateIndex
CREATE UNIQUE INDEX "Author_readerId_key" ON "Author"("readerId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_articleId_key" ON "Comment"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_readerFollowToAuthorsId_key" ON "Reader"("readerFollowToAuthorsId");

-- AddForeignKey
ALTER TABLE "Reader" ADD CONSTRAINT "Reader_readerFollowToAuthorsId_fkey" FOREIGN KEY ("readerFollowToAuthorsId") REFERENCES "ReaderFollowToAuthors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reader" ADD CONSTRAINT "Reader_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReaderFollowToAuthors" ADD CONSTRAINT "_AuthorToReaderFollowToAuthors_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReaderFollowToAuthors" ADD CONSTRAINT "_AuthorToReaderFollowToAuthors_B_fkey" FOREIGN KEY ("B") REFERENCES "ReaderFollowToAuthors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
