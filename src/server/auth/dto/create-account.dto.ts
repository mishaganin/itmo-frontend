import { IsString, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsString()
    username!: string;

  @IsString()
    email!: string;

  @IsString()
    password!: string;
}
