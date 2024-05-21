import { IsString } from 'class-validator';

export class FindArticlesByContentDto {
  @IsString()
    title!: string
}
