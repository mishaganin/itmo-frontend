import { IsArray, IsString, IsUUID } from 'class-validator';
import { AccountDto } from '@server/auth/dto/account.dto';

export class CommentArticleDto {
  @IsString()
  @IsUUID('4')
    readerId?: string

  @IsString()
  @IsUUID('4')
    authorId?: string

  @IsString()
    comment!: string

  @IsString()
  @IsUUID('4')
    articleId!: string
}
