import { ApiProperty } from '@nestjs/swagger';
import { Author } from '@server/author/entities/author.entity';
import { Comment } from './comment.entity';
import { ArticleList } from './article-list.entity';

export class Article {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    title!: string;

  @ApiProperty({ type: String })
    description!: string;

  @ApiProperty({ type: String })
    imageUrl!: string;

  @ApiProperty({ isArray: true, type: () => String })
    tags!: string[];

  @ApiProperty({ type: Object })
    reactions!: Record<string, string[]> | null;

  @ApiProperty({ type: String })
    authorId!: string;

  @ApiProperty({ type: () => Author })
    author!: Author;

  @ApiProperty({ isArray: true, type: () => Comment })
    comments!: Comment[];

  @ApiProperty({ isArray: true, type: () => ArticleList })
    articleList!: ArticleList[];

  @ApiProperty({ type: Date })
    createdAt!: string;
}
