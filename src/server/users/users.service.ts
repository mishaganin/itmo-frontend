import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findOne(username: string) {
    return (
      this.prisma.reader.findUnique({
        where: {
          username,
        },
      }) ||
      this.prisma.author.findUnique({
        where: {
          username,
        },
      })
    );
  }
}
