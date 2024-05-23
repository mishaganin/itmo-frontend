import { IsArray, IsString, IsUUID } from 'class-validator';
import { AccountDto } from '@server/auth/dto/account.dto';

export class ReaderDto extends AccountDto {
  @IsString()
  @IsUUID('4')
    accountId!: string

  @IsArray()
  @IsUUID('4', { each: true })
    followedAuthorIds!: string[]

  @IsArray()
  @IsUUID('4', { each: true })
    articleListIds!: string[]
}
