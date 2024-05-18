import { IsArray, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
    accountId?: string

  @IsArray()
    followedAuthorIds!: string[]

  @IsArray()
    articleListIds!: string[]

  @IsArray()
    articleIds!: string[]
}
