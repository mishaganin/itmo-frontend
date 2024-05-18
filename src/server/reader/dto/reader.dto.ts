import { IsArray, IsString } from 'class-validator';

export class ReaderDto {
  @IsString()
    accountId!: string

  @IsArray()
    followedAuthorIds!: string[]

  @IsArray()
    articleListIds!: string[]
}
