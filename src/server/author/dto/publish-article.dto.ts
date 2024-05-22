import { IsArray, IsString, IsUUID } from 'class-validator';

export class PublishArticleDto {
  @IsString()
    title!: string

  @IsString()
    description!: string

  @IsString()
    imageUrl!: string

  @IsString()
    authorId!: string

  @IsArray()
  @IsString({ each: true })
    tags!: string[]
}
