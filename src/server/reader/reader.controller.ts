import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FollowAuthorDto } from '@server/reader/dto/follow-author.dto';
import { GetArticleByIdDto } from '@server/reader/dto/get-article-by-id.dto';
import { OpenProfileDto } from '@server/reader/dto/open-profile.dto';
import { CreateArticleListDto } from '@server/reader/dto/create-article-list.dto';
import { FindArticlesByContentDto } from '@server/reader/dto/find-articles-by-content.dto';
import { SetQuickReactionDto } from '@server/reader/dto/set-quick-reaction.dto';
import { CommentArticleDto } from '@server/reader/dto/comment-article.dto';
import { SaveArticleToListDto } from '@server/reader/dto/save-article-to-list.dto';
import { GetLastArticlesFromFollowedAuthorsDto } from '@server/reader/dto/get-last-articles-from-followed-authors.dto';
import { Public } from '@shared/consts';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { CreateReaderDto } from './dto/create-reader.dto';
import { ReaderService } from './reader.service';
import { AuthGuard } from '@server/guards/auth.guard';

@Controller('reader')
export class ReaderController {
  constructor(private readonly readerService: ReaderService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createReaderDto: CreateReaderDto) {
    return this.readerService.create(createReaderDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.readerService.findAll();
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReaderDto: UpdateReaderDto) {
    return this.readerService.update(+id, updateReaderDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readerService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Post('/open-profile')
  async openProfile(openProfileDto: OpenProfileDto) {
    return this.readerService.openProfile(openProfileDto);
  }

  @UseGuards(AuthGuard)
  @Post('/follow-author')
  async followAuthor(@Body() followAuthorDto: FollowAuthorDto) {
    return this.readerService.followAuthor(followAuthorDto);
  }

  @UseGuards(AuthGuard)
  @Post('/get-article-by-id')
  async getArticleById(getArticleByIdDto: GetArticleByIdDto) {
    return this.readerService.getArticleById(getArticleByIdDto);
  }

  @UseGuards(AuthGuard)
  @Post('/set-quick-reaction')
  async setQuickReaction(setQuickReactionDto: SetQuickReactionDto) {
    return this.readerService.setQuickReaction(setQuickReactionDto);
  }

  @UseGuards(AuthGuard)
  @Post('/comment-article')
  async commentArticle(commentArticleDto: CommentArticleDto) {
    return this.readerService.commentArticle(commentArticleDto);
  }

  @UseGuards(AuthGuard)
  @Post('/save-article-to-list')
  async saveArticleToList(saveArticleToListDto: SaveArticleToListDto) {
    return this.readerService.saveArticleToList(saveArticleToListDto);
  }

  @UseGuards(AuthGuard)
  @Post('create-list')
  async createList(@Body() createArticleListDto: CreateArticleListDto) {
    return this.readerService.createList(createArticleListDto);
  }

  @UseGuards(AuthGuard)
  @Public()
  @Get('get-articles')
  async getArticles() {
    return this.readerService.getArticles();
  }

  @UseGuards(AuthGuard)
  @Public()
  @Post('get-articles-from-followed-authors')
  async getLastArticlesFromFollowedAuthors(
    @Body() getLastArticlesFromFollowedAuthorsDto: GetLastArticlesFromFollowedAuthorsDto,
  ) {
    return this.readerService.getLastArticlesFromFollowedAuthors(
      getLastArticlesFromFollowedAuthorsDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('find-articles-by-content')
  async findArticlesByContent(findArticleByContentDto: FindArticlesByContentDto) {
    return this.readerService.findArticlesByContent(findArticleByContentDto);
  }
}
