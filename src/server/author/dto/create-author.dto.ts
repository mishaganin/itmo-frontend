import { IsArray, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
    readerId?: string

  @IsArray()
    articleIds!: string[]

  @IsArray()
    readerFollowToAuthorsIds!: string[];
}
