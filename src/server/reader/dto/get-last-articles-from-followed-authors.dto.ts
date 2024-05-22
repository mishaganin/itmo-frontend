import { IsString, IsUUID } from 'class-validator';

export class GetLastArticlesFromFollowedAuthorsDto {
  @IsString()
  @IsUUID('4')
    readerId!: string
}
