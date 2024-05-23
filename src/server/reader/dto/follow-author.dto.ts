import { IsArray, IsString, IsUUID } from 'class-validator';

export class FollowAuthorDto {
  @IsString()
  @IsUUID('4')
    readerId!: string

  @IsString()
  @IsUUID('4')
    authorId!: string
}
