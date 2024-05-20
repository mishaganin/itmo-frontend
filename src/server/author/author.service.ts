import { Injectable } from '@nestjs/common';
import { Article } from '@server/article/entities/article.entity';
import { mapPrismaArticleToArticle } from '@server/mappers/mapPrismaArticleToArticle';
import { PrismaService } from '../prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    // const articles = await this.prisma.article.findMany({
    //   include: {
    //     author: true,
    //     comments: true,
    //     articleList: true,
    //   },
    // });
    // return this.prisma.author.create({
    //   data: {
    //     readerId: createAuthorDto.readerId,
    //     readerFollowToAuthorsIds: createAuthorDto.readerFollowToAuthorsIds,
    //     articles: {
    //       connect: createAuthorDto.articleIds.map(id => ({ id })),
    //     },
    //   }
    // });

    // const author = await this.prisma.author.create({
    //   data: {
    //     readerId,
    //     articles: {
    //       connect: articles.map(article => ({ id: article.id })),
    //     },
    //     readerFollowToAuthors: {
    //       connect: readerFollowsAuthors.map(reader => ({ id: reader.id })),
    //     }
    //   },
    // });
    // return this.prisma.author.create({ data: { i}})
    // return 'Created';

    const { readerId, articleIds, readerFollowToAuthorsIds } = createAuthorDto;

    console.log('hey');

    // Fetch articles and readers by IDs
    const articles = await this.prisma.article.findMany({
      where: { id: { in: articleIds } }
    });

    console.log(articles);

    const readerFollowsAuthors = await this.prisma.reader.findMany({
      where: { id: { in: readerFollowToAuthorsIds } }
    });

    console.log(readerFollowsAuthors);

    const author = await this.prisma.author.create({
      data: {
        readerId: readerId ?? '',
        articles: {
          connect: articles.map(article => ({ id: article.id })),
        },
        readerFollowToAuthors: {
          connect: readerFollowsAuthors.map(reader => ({ id: reader.id })),
        }
      },
    });

    console.log(author);

    return author;
  }

  findAll() {
    return 'This action returns all author';
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }

  publishArticle(title: string, description: string, authorId: string, tags: string[] = [], reactions: Record<string, number> = {}) {
    return this.prisma.article.create({ data: { title, description, authorId, tags, reactions }});
  }
}
