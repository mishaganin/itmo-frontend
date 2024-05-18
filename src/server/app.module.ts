import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AuthorController } from '@server/author/author.controller';
import { ReaderController } from '@server/reader/reader.controller';
import { ArticleController } from '@server/article/article.controller';
import { PrismaService } from '@server/prisma.service';
import { AuthService } from '@server/auth/auth.service';
import { AuthorService } from '@server/author/author.service';
import { ReaderService } from '@server/reader/reader.service';
import { ArticleService } from '@server/article/article.service';
import { NODE_ENV } from '@shared/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReaderModule } from './reader/reader.module';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: NODE_ENV === 'development' }),
      { viewsDir: null }
    ),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_URL'),
        port: 3306,
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [User],
        synchronize: true,
      })
    }),
    AuthModule,
    AuthorModule,
    ReaderModule,
    ArticleModule,
  ],
  controllers: [
    AppController,
    AuthorController,
    AuthorController,
    ReaderController,
    ArticleController
  ],
  providers: [
    AppService,
    PrismaService,
    AuthService,
    AuthorService,
    ReaderService,
    ArticleService
  ],
})
export class AppModule {}
