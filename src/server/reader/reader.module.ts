import { Module } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { ReaderService } from './reader.service';
import { ReaderController } from './reader.controller';

@Module({
  controllers: [ReaderController],
  providers: [ReaderService, PrismaService],
})
export class ReaderModule {}
