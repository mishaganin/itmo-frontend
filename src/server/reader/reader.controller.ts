import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { FollowAuthorDto } from '@server/reader/dto/follow-author.dto';
import { GetArticleByIdDto } from '@server/reader/dto/get-article-by-id.dto';
import { OpenProfileDto } from '@server/reader/dto/open-profile.dto';
import { CreateArticleDto } from '@server/article/dto/create-article.dto';
import { CreateArticleListDto } from '@server/reader/dto/create-article-list.dto';
import { FindArticlesByContentDto } from '@server/reader/dto/find-articles-by-content.dto';
import { SetQuickReactionDto } from '@server/reader/dto/set-quick-reaction.dto';
import { CommentArticleDto } from '@server/reader/dto/comment-article.dto';
import { SaveArticleToListDto } from '@server/reader/dto/save-article-to-list.dto';

@Controller('reader')
export class ReaderController {
  constructor(private readonly readerService: ReaderService) {}

  @Post()
  create(@Body() createReaderDto: CreateReaderDto) {
    return this.readerService.create(createReaderDto);
  }

  @Get()
  findAll() {
    return this.readerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReaderDto: UpdateReaderDto) {
    return this.readerService.update(+id, updateReaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readerService.remove(+id);
  }

  @Post('/open-profile')
  async openProfile(openProfileDto: OpenProfileDto) {
    return this.readerService.openProfile(openProfileDto);
  }

  @Post('/follow-author')
  async followAuthor(@Body() followAuthorDto: FollowAuthorDto) {
    return this.readerService.followAuthor(followAuthorDto);
  }

  @Post('/get-article-by-id')
  async getArticleById(getArticleByIdDto: GetArticleByIdDto) {
    return this.readerService.getArticleById(getArticleByIdDto);
  }

  @Post('/set-quick-reaction')
  async setQuickReaction(setQuickReactionDto: SetQuickReactionDto) {
    return this.readerService.setQuickReaction(setQuickReactionDto);
  }

  @Post('/comment-article')
  async commentArticle(commentArticleDto: CommentArticleDto) {
    return this.readerService.commentArticle(commentArticleDto);
  }

  @Post('/comment-article')
  async saveArticleToList(saveArticleToListDto: SaveArticleToListDto) {
    return this.readerService.saveArticleToList(saveArticleToListDto);
  }

  @Post('create-list')
  async createList(@Body() createArticleListDto: CreateArticleListDto) {
    return this.readerService.createList(createArticleListDto);
  }

  @Post('find-articles-by-content')
  async findArticlesByContent(findArticleByContentDto: FindArticlesByContentDto) {
    return this.readerService.findArticlesByContent(findArticleByContentDto);
  }
}
