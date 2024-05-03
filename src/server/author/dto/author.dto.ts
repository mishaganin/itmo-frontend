import { IsArray, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
    id!: string;

  @IsString()
    username!: string;

  @IsString()
    email!: string;

  @IsString()
    password!: string;

  @IsArray()
    followedAuthorIds!: string[]

  @IsArray()
    articleListIds!: string[]

  @IsArray()
    articleIds!: string[]
}
