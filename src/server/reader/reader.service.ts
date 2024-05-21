import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { FollowAuthorDto } from '@server/reader/dto/follow-author.dto';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { CreateArticleListDto } from '@server/reader/dto/create-article-list.dto';
import { Article } from '@server/article/entities/article.entity';
import { GetArticleByIdDto } from '@server/reader/dto/get-article-by-id.dto';
import { OpenProfileDto } from '@server/reader/dto/open-profile.dto';
import { FindArticlesByContentDto } from '@server/reader/dto/find-articles-by-content.dto';
import { find } from 'rxjs/src';
import { SetQuickReactionDto } from '@server/reader/dto/set-quick-reaction.dto';
import { CommentArticleDto } from '@server/reader/dto/comment-article.dto';
import { SaveArticleToListDto } from '@server/reader/dto/save-article-to-list.dto';

@Injectable()
export class ReaderService {
  constructor(private prisma: PrismaService) {}

  async create(createReaderDto: CreateReaderDto) {
    const { username, email, password  } = createReaderDto;
    return this.prisma.reader.create({
      data: {
        id: uuidv4(),
        username,
        email,
        password,
        followedAuthors: {
          create: []
        },
        articleLists: {
          create: []
        },
        comments: {
          create: []
        },
      }
    })
  }

  findAll() {
    return this.prisma.reader.findMany({
      include: {
        followedAuthors: true,
        articleLists: true,
        comments: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} reader`;
  }

  update(id: number, updateReaderDto: UpdateReaderDto) {
    return `This action updates a #${id} reader`;
  }

  remove(id: number) {
    return `This action removes a #${id} reader`;
  }

  async followAuthor(followAuthorDto: FollowAuthorDto) {
    const { readerId, authorId } = followAuthorDto;
    return this.prisma.reader.update({
      where: {
        id: readerId
      },
      data: {
        followedAuthors: {
          connect: {
            id: authorId
          },
        },
      },
    });
  }

  async setQuickReaction(setQuickReactionDto: SetQuickReactionDto) {
    const { reactionId, authorId, articleId } = setQuickReactionDto;
    const article = await this.prisma.article.findUniqueOrThrow({
      where: { id: articleId },
      select: { reactions: true },
    });

    if (!article.reactions) {
      throw new Error('No created reactions');
    }

    const updatedReactions = { ...Object.values(article.reactions) };

    if (updatedReactions[reactionId]) {
      const index = updatedReactions[reactionId].indexOf(authorId);
      if (index === -1) {
        updatedReactions[reactionId].push(authorId);
      } else {
        updatedReactions[reactionId].splice(index, 1);
      }
    } else {
      updatedReactions[reactionId] = [authorId];
    }

    return this.prisma.article.update({
      where: {
        id: setQuickReactionDto.articleId,
      },
      data: {
        reactions: updatedReactions,
      },
    });
  }

  async commentArticle(commentArticleDto: CommentArticleDto) {
    const { comment: content, readerId, authorId, articleId } = commentArticleDto;
    const comment = await this.prisma.comment.create({
      data: {
        id: uuidv4(),
        content,
        readerId,
        authorId,
        articleId,
      },
    });
  }

  async saveArticleToList(saveArticleToList: SaveArticleToListDto) {
    const { articleId, listId } = saveArticleToList;
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const articleList = await this.prisma.articleList.findUnique({
      where: { id: listId },
    });

    if (!articleList) {
      throw new NotFoundException('Article list not found');
    }

    return this.prisma.articleList.update({
      where: { id: listId },
      data: {
        articles: {
          connect: { id: articleId },
        },
      },
    });
  }

  async getLastArticlesFromFollowedAuthors(readerId: string) {
    const reader = await this.prisma.reader.findUniqueOrThrow({
      where: {
        id: readerId,
      },
      include: {
        followedAuthors: {
          include: {
            articles: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
            },
          },
        },
      },
    });

    return reader.followedAuthors.map((author) => author.articles[0]);
  }

  async createList(createArticleListDto: CreateArticleListDto) {
    const { name, readerId, authorId } = createArticleListDto;

    return this.prisma.articleList.create({
      data: {
        id: uuidv4(),
        name,
        articles: {
          create: [],
        },
        readerId,
        authorId,
      },
    });
  }

  async getArticleById(getArticleByIdDto: GetArticleByIdDto) {
    return this.prisma.article.findUniqueOrThrow({
      where: {
        id: getArticleByIdDto.id,
      },
    });
  }

  async getArticles() {
    return this.prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 12,
      include: {
        author: true,
        comments: true,
      }
    })
  }

  async openProfile(openProfileDto: OpenProfileDto) {
    return this.prisma.author.findUnique({
      where: {
        id: openProfileDto.id,
      },
    });
  }

  async findArticlesByContent(findArticleByContentDto: FindArticlesByContentDto) {
    return this.prisma.article.findMany({
      where: {
        OR: [
          {
            title: {
              contains: findArticleByContentDto.title,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: findArticleByContentDto.title,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
  }
}
