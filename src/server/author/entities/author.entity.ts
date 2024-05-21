import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@server/article/entities/article.entity';
import { Reader } from '@server/reader/entities/reader.entity';

export class Author extends Reader {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ isArray: true, type: () => Article })
    articles!: Article[];
}
