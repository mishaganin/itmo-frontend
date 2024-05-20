import { IsArray, IsString, IsUUID } from 'class-validator';

export class ReaderDto {
  @IsString()
  @IsUUID('4')
    accountId!: string

  @IsArray()
  @IsUUID('4', { each: true })
    followedAuthorIds!: string[]

  @IsArray()
  @IsUUID('4', { each: true })
    articleListIds!: string[]
}
