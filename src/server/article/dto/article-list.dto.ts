import {
  IsArray,
  IsString,
  IsUUID,
} from 'class-validator';

export class ArticleListDto {
  @IsString()
  @IsUUID('4')
    id!: string;

  @IsString()
    name!: string;

  @IsArray()
  @IsUUID('4', { each: true })
    articleIds!: string[];

  @IsString()
  @IsUUID('4')
    readerId!: string;

  @IsString()
  @IsUUID('4')
    authorId?: string;
}
