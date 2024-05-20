import { Article as PrismaArticle, Author as PrismaAuthor, Comment as PrismaComment, ArticleList as PrismaArticleList } from '@prisma/client';
import { Author } from '@server/author/entities/author.entity';
import { Article } from '@server/article/entities/article.entity';
import { ArticleList } from '@server/article/entities/article-list.entity';
import { Comment } from '@server/article/entities/comment.entity';

export function mapPrismaArticleToArticle(prismaArticle: PrismaArticle & { author: PrismaAuthor, comments: PrismaComment[], ArticleList: PrismaArticleList[] }): Article {
  return {
    id: prismaArticle.id,
    title: prismaArticle.title,
    description: prismaArticle.description,
    tags: prismaArticle.tags || [],
    reactions: null,
    authorId: prismaArticle.authorId,
    author: {
      id: prismaArticle.author.id,
      // map other author fields here
    } as Author,
    comments: prismaArticle.comments.map(comment => ({
      id: comment.id,
      content: comment.content,
      authorId: comment.authorId,
      // map other comment fields here
    } as Comment)) || [],
    articleList: prismaArticle.ArticleList.map(articleList => ({
      id: articleList.id,
      name: articleList.name,
      // map other article list fields here
    } as ArticleList)),
  };
}
