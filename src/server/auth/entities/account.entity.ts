import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Reader } from '@server/reader/entities/reader.entity';

export class Account {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    username!: string;

  @ApiProperty({ type: String })
    email!: string;

  @ApiProperty({ type: String })
    password!: string;

  @ApiPropertyOptional({ type: () => Reader })
    reader?: Reader;
}
