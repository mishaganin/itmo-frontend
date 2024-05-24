import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PublishArticleDto } from '@server/author/dto/publish-article.dto';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Roles } from '@server/decorators/roles.decorator';
import { Role } from '@shared/enums/role.enum';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
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

  @Post('/publish')
  @Roles(Role.Admin)
  async publishArticle(@Body() publishArticleDto: PublishArticleDto) {
    return this.authorService.publishArticle(publishArticleDto);
  }
}
