import { IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ArticleDto {
  @IsString()
    id: string;

  @IsString()
    title: string;

  @IsString()
    description: string;

  @IsArray()
  @Type(() => String)
    tags: string[];

  reactions: Record<string, number>

  @IsString()
    authorId: string;

  @IsArray()
  @Type(() => String)
    commentIds: string[];
}
