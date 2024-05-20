import { IsArray, IsString } from 'class-validator';

export class CreateReaderDto {
  @IsString()
  accountId!: string
}
