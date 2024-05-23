import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Author } from '@server/author/entities/author.entity';
import { Reader } from './reader.entity';

export class ReaderFollowToAuthors {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ isArray: true, type: () => Author })
    followedAuthors!: Author[];

  @ApiPropertyOptional({ type: () => Reader })
    reader?: Reader;
}
