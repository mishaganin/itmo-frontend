import {
  IsArray,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateArticleListDto {
  @IsString()
    name!: string;

  @IsString()
  @IsUUID('4')
    readerId!: string;

  @IsString()
  @IsUUID('4')
    authorId?: string;
}
