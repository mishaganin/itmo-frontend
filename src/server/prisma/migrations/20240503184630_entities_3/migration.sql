/*
  Warnings:

  - You are about to drop the column `articleId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `_ArticleListArticles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `readerId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleListArticles" DROP CONSTRAINT "_ArticleListArticles_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleListArticles" DROP CONSTRAINT "_ArticleListArticles_B_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "articleId",
DROP COLUMN "authorId",
ADD COLUMN     "readerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ArticleListArticles";

-- CreateTable
CREATE TABLE "_ArticleToArticleList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToArticleList_AB_unique" ON "_ArticleToArticleList"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToArticleList_B_index" ON "_ArticleToArticleList"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToArticleList" ADD CONSTRAINT "_ArticleToArticleList_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToArticleList" ADD CONSTRAINT "_ArticleToArticleList_B_fkey" FOREIGN KEY ("B") REFERENCES "ArticleList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
