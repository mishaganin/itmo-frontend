/*
  Warnings:

  - You are about to drop the column `readerFollowToAuthorsIds` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `readerId` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `accountId` on the `Reader` table. All the data in the column will be lost.
  - You are about to drop the column `readerFollowToAuthorsId` on the `Reader` table. All the data in the column will be lost.
  - You are about to drop the `ReaderFollowToAuthors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthorToReaderFollowToAuthors` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[authorId]` on the table `ArticleList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readerId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Reader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Reader` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Author" DROP CONSTRAINT "Author_readerId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Reader" DROP CONSTRAINT "Reader_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Reader" DROP CONSTRAINT "Reader_readerFollowToAuthorsId_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToReaderFollowToAuthors" DROP CONSTRAINT "_AuthorToReaderFollowToAuthors_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToReaderFollowToAuthors" DROP CONSTRAINT "_AuthorToReaderFollowToAuthors_B_fkey";

-- DropIndex
DROP INDEX "Author_readerId_key";

-- DropIndex
DROP INDEX "Reader_accountId_key";

-- DropIndex
DROP INDEX "Reader_readerFollowToAuthorsId_key";

-- AlterTable
ALTER TABLE "ArticleList" ADD COLUMN     "authorId" TEXT;

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "readerFollowToAuthorsIds",
DROP COLUMN "readerId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "readerId" TEXT NOT NULL,
ALTER COLUMN "articleId" DROP NOT NULL,
ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reader" DROP COLUMN "accountId",
DROP COLUMN "readerFollowToAuthorsId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "ReaderFollowToAuthors";

-- DropTable
DROP TABLE "_AuthorToReaderFollowToAuthors";

-- CreateTable
CREATE TABLE "_AuthorToReader" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToReader_AB_unique" ON "_AuthorToReader"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToReader_B_index" ON "_AuthorToReader"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleList_authorId_key" ON "ArticleList"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Author_username_key" ON "Author"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Author_email_key" ON "Author"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_authorId_key" ON "Comment"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_username_key" ON "Reader"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_email_key" ON "Reader"("email");

-- AddForeignKey
ALTER TABLE "ArticleList" ADD CONSTRAINT "ArticleList_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReader" ADD CONSTRAINT "_AuthorToReader_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToReader" ADD CONSTRAINT "_AuthorToReader_B_fkey" FOREIGN KEY ("B") REFERENCES "Reader"("id") ON DELETE CASCADE ON UPDATE CASCADE;
