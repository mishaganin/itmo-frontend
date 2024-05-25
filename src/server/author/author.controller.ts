import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { PublishArticleDto } from '@server/author/dto/publish-article.dto';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Roles } from '@server/decorators/roles.decorator';
import { Role } from '@shared/enums/role.enum';
import { AuthGuard } from '@server/guards/auth.guard';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Post('/publish')
  @Roles(Role.Author)
  async publishArticle(@Body() publishArticleDto: PublishArticleDto) {
    return this.authorService.publishArticle(publishArticleDto);
  }
}
