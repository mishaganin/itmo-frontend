import { ApiProperty } from '@nestjs/swagger';
import { ArticleList } from '@server/article/entities/article-list.entity';
import { Account } from '@server/auth/entities/account.entity';
import { ReaderFollowToAuthors } from './reader-follow-to-authors.entity';

export class Reader extends Account {
  @ApiProperty({ nullable: true, type: String })
  readerFollowToAuthorsId!: string | null;

  @ApiProperty({ nullable: true, type: () => ReaderFollowToAuthors })
  readerFollowToAuthors!: ReaderFollowToAuthors;

  @ApiProperty({ isArray: true, type: () => ArticleList })
  articleLists!: ArticleList[];

  @ApiProperty({ isArray: true, type: () => Comment })
  comments!: Comment[];
}
