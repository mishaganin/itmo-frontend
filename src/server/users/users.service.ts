import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findOne(email: string) {
    return (
      this.prisma.reader.findUnique({
        where: {
          email,
        },
      }) ||
      this.prisma.author.findUnique({
        where: {
          email,
        },
      })
    );
  }
}
