import { ApiProperty } from '@nestjs/swagger';
import { Reader } from '@server/reader/entities/reader.entity';
import { Article } from '@server/article/entities/article.entity';
import { Author } from '@server/author/entities/author.entity';

export class Comment {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    content!: string;

  @ApiProperty({ type: String })
    readerId?: string;

  @ApiProperty({ type: () => Reader })
    reader?: Reader;

  @ApiProperty({ type: String })
    authorId?: string;

  @ApiProperty({ type: () => Author })
    author?: Author;

  @ApiProperty({ type: String })
    articleId!: string;

  @ApiProperty({ type: () => Article })
    article!: Article;
}
