/*
  Warnings:

  - You are about to drop the column `articleListId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Reader` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Reader` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Reader` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountId]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `readerId` to the `ArticleList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Reader` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_articleListId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropIndex
DROP INDEX "Author_email_key";

-- DropIndex
DROP INDEX "Reader_email_key";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "articleListId";

-- AlterTable
ALTER TABLE "ArticleList" ADD COLUMN     "readerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reader" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ArticleListArticles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleListArticles_AB_unique" ON "_ArticleListArticles"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleListArticles_B_index" ON "_ArticleListArticles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Author_accountId_key" ON "Author"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_accountId_key" ON "Reader"("accountId");

-- AddForeignKey
ALTER TABLE "ArticleList" ADD CONSTRAINT "ArticleList_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleListArticles" ADD CONSTRAINT "_ArticleListArticles_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleListArticles" ADD CONSTRAINT "_ArticleListArticles_B_fkey" FOREIGN KEY ("B") REFERENCES "ArticleList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
