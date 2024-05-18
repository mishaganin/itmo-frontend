import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@server/article/entities/article.entity';
import { Reader } from '@server/reader/entities/reader.entity';

export class ArticleList {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    name!: string;

  @ApiProperty({ isArray: true, type: () => Article })
    articles!: Article[];

  @ApiProperty({ type: String })
    readerId!: string;

  @ApiProperty({ type: () => Reader })
    reader!: Reader;
}
