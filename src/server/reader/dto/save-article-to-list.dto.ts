import { IsString, IsUUID } from 'class-validator';

export class SaveArticleToListDto {
  @IsString()
  @IsUUID('4')
    articleId!: string

  @IsString()
  @IsUUID('4')
    listId!: string
}
