import { ApiProperty } from '@nestjs/swagger';

export class Reaction {
  @ApiProperty({ type: String })
    id!: string;

  @ApiProperty({ type: String })
    icon!: string;
}
