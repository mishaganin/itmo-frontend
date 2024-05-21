import {
  IsArray,
  IsDate,
  IsObject,
  IsString,
  IsUrl,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ArticleDto {
  @IsString()
  @IsUUID('4')
    id!: string;

  @IsString()
    title!: string;

  @IsString()
    description!: string;

  @IsUrl()
    imageUrl!: string;

  @IsArray()
  @Type(() => String)
    tags!: string[];

  @IsObject()
  @ValidateNested()
  @Type(() => () => String)
    reactions!: Record<string, string[]>;

  @IsString()
  @IsUUID('4')
    authorId!: string;

  @IsArray()
  @IsUUID('4', { each: true })
    commentIds!: string[];

  @IsDate()
    createdAt!: Date;
}
