import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Article } from '@server/article/entities/article.entity';
import { PrismaService } from '../prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const { username, email, password } = createAuthorDto;

    return this.prisma.author.create({
      data: {
        id: uuidv4(),
        username,
        email,
        password,
        followersReaders: {
          create: []
        },
        articleLists: {
          create: []
        },
        comments: {
          create: []
        },
        articles: {
          create: []
        },
      }
    });
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

  publishArticle(title: string, description: string, imageUrl: string, authorId: string, tags: string[] = [], reactions: Record<string, string[]> = {}) {
    return this.prisma.article.create({ data: { title, description, imageUrl, authorId, tags, reactions }});
  }
}
