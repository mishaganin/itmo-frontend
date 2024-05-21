import { IsArray, IsString, IsUUID } from 'class-validator';
import { AccountDto } from '@server/auth/dto/account.dto';

export class GetArticleByIdDto {
  @IsString()
  @IsUUID('4')
    id!: string
}
