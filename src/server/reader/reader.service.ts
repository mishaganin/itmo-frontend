import { Injectable } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { PrismaService } from '@server/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { ArticleList } from '@prisma/client';
import { FollowAuthorDto } from '@server/reader/dto/follow-author.dto';

@Injectable()
export class ReaderService {
  constructor(private prisma: PrismaService) {}

  async create(createReaderDto: CreateReaderDto) {
    const { accountId } = createReaderDto;
    return this.prisma.reader.create({
      data: {
        id: uuidv4(),
        accountId,
        readerFollowToAuthorsId: null,
        readerFollowToAuthors: null,
        articleLists: {
          create: []
        },
        author: {
          connect: null,
        },
        comments: {
          create: []
        },
      }
    })
  }

  findAll() {
    return `This action returns all reader`;
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

  async followAuhtor(followAuthorDto: FollowAuthorDto) {
    const { readerId, authorId } = followAuthorDto;
    return this.prisma.readerFollowToAuthors.update({
      where: { id: readerId },
      data: {
        followedAuthors: {
          connect: { id: authorId },
        },
      },
    });
  }
}
