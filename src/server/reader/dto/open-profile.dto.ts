import { IsArray, IsString, IsUUID } from 'class-validator';
import { AccountDto } from '@server/auth/dto/account.dto';

export class OpenProfileDto {
  @IsString()
  @IsUUID('4')
    id!: string
}
