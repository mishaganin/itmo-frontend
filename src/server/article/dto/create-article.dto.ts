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

export class CreateArticleDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsUrl()
  imageUrl!: string;

  @IsArray()
  @Type(() => String)
  tags!: string[];

  @IsString()
  @IsUUID('4')
  authorId!: string;

  @IsDate()
  createdAt!: Date;
}
