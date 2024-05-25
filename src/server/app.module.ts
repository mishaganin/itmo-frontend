import Next from 'next';
import { RenderModule } from 'nest-next';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthorController } from '@server/author/author.controller';
import { ReaderController } from '@server/reader/reader.controller';
import { ArticleController } from '@server/article/article.controller';
import { PrismaService } from '@server/prisma.service';
import { AuthService } from '@server/auth/auth.service';
import { AuthorService } from '@server/author/author.service';
import { ReaderService } from '@server/reader/reader.service';
import { ArticleService } from '@server/article/article.service';
import { NODE_ENV } from '@shared/env';
import { UsersModule } from '@server/users/users.module';
import { UsersService } from '@server/users/users.service';
import { AuthGuard } from '@server/guards/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReaderModule } from './reader/reader.module';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from '@server/guards/roles.guard';

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), { viewsDir: null }),
    AuthModule,
    AuthorModule,
    ReaderModule,
    ArticleModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    AuthorController,
    AuthorController,
    ReaderController,
    ArticleController,
  ],
  providers: [
    AppService,
    PrismaService,
    AuthService,
    AuthorService,
    ReaderService,
    ArticleService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
