import { IsString } from 'class-validator';

export class PublishArticleDto {
  @IsString()
    title!: string

  @IsString()
    description!: string

  @IsString()
    authorId!: string
}
