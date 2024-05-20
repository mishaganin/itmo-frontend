import { IsString, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsUUID('4')
  id!: string;

  @IsString()
  username!: string;

  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
