-- DropForeignKey
ALTER TABLE "ArticleList" DROP CONSTRAINT "ArticleList_readerId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_readerId_fkey";

-- AlterTable
ALTER TABLE "ArticleList" ALTER COLUMN "readerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "readerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ArticleList" ADD CONSTRAINT "ArticleList_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
