import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublishArticleDto } from '@server/author/dto/publish-article.dto';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    console.log(createAuthorDto);
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }

  @Get('/publish')
  publishArticle(@Body() publishArticleDto: PublishArticleDto) {
    return this.authorService.publishArticle(
      publishArticleDto.title,
      publishArticleDto.description,
      publishArticleDto.imageUrl,
      publishArticleDto.authorId
    );
  }
}
