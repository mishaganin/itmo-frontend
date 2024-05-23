import { IsArray, IsString, IsUUID } from 'class-validator';
import { AccountDto } from '@server/auth/dto/account.dto';

export class SetQuickReactionDto {
  @IsString()
  @IsUUID('4')
    reactionId!: string

  @IsString()
  @IsUUID('4')
    authorId!: string

  @IsString()
  @IsUUID('4')
    articleId!: string
}
