import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@shared/enums/role.enum';
import { Length } from 'class-validator';

export class Account {
  @ApiProperty({ type: 'uuid' })
  id!: string;

  @ApiProperty({ type: String })
  username!: string;

  @ApiProperty({ type: String })
  email!: string;

  @ApiProperty({ type: String })
  @Length(4, 100)
  password!: string;

  @ApiProperty({ isArray: true, type: () => String })
  roles!: Role[];
}
