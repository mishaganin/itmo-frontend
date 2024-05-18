import { ApiProperty } from '@nestjs/swagger';
import { Reader } from '@server/reader/entities/reader.entity';
import { Article } from '@server/article/entities/article.entity';

export class Comment {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    content!: string;

  @ApiProperty({ type: String })
    authorId!: string;

  @ApiProperty({ type: () => Reader })
    author!: Reader;

  @ApiProperty({ type: String })
    articleId!: string;

  @ApiProperty({ type: () => Article })
    article!: Article;
}
