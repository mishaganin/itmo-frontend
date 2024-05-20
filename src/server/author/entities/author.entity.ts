import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@server/article/entities/article.entity';
import { Reader } from '@server/reader/entities/reader.entity';
import { ReaderFollowToAuthors } from '@server/reader/entities/reader-follow-to-authors.entity';

export class Author {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ isArray: true, type: () => Article })
    articles!: Article[];

  @ApiProperty({ type: String })
    readerId!: string;

  @ApiProperty({ type: () => Reader })
    reader!: Reader;

  @ApiProperty({ isArray: true, type: String })
    readerFollowToAuthorsIds!: string[];

  @ApiProperty({ isArray: true, type: () => ReaderFollowToAuthors })
    readerFollowToAuthors!: ReaderFollowToAuthors[];
}
