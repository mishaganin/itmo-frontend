import { IsBoolean, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  username!: string;

  @IsString()
  email!: string;

  @IsString()
  password!: string;

  @IsBoolean()
  isAuthor!: boolean;
}
