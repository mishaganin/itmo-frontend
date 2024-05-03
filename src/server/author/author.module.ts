import { Module } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, PrismaService],
})
export class AuthorModule {}
