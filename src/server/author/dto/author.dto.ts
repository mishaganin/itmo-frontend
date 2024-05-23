import { IsArray, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
    readerId?: string

  @IsArray()
    articleIds!: string[]

  @IsArray()
    readerFollowToAuthorsIds!: string[];
}
