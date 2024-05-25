import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@shared/enums/role.enum';

export class Account {
  @ApiProperty({ type: String })
  id!: string;

  @ApiProperty({ type: String })
  username!: string;

  @ApiProperty({ type: String })
  email!: string;

  @ApiProperty({ type: String })
  password!: string;

  @ApiProperty({ isArray: true, type: () => String })
  roles!: Role[];
}
