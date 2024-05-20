import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArticleList } from '@server/article/entities/article-list.entity';
import { Account } from '@server/auth/entities/account.entity';
import { Author } from '@server/author/entities/author.entity';
import { ReaderFollowToAuthors } from './reader-follow-to-authors.entity';

export class Reader {
  @ApiProperty({ type: 'uuid' })
    id!: string;

  @ApiProperty({ nullable: true, type: String })
    readerFollowToAuthorsId!: string | null;

  @ApiProperty({ nullable: true, type: () => ReaderFollowToAuthors })
    readerFollowToAuthors!: ReaderFollowToAuthors;

  @ApiProperty({ type: String })
    accountId!: string;

  @ApiProperty({ type: () => Account })
    account!: Account;

  @ApiProperty({ isArray: true, type: () => ArticleList })
    articleLists!: ArticleList[];

  @ApiPropertyOptional({ nullable: true, type: () => Author })
    author?: Author;

  @ApiProperty({ isArray: true, type: () => Comment })
    comments!: Comment[];
}
