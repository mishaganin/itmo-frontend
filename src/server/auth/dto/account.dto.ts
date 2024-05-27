import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({ description: 'The id of the user' })
  @IsString()
  id!: string;

  @ApiProperty({ example: 'mishaganin', description: 'The username of the user' })
  @IsString()
  username!: string;

  @ApiProperty({ example: '123@gmail.ru', description: 'The email of the user' })
  @IsString()
  email!: string;

  @ApiProperty({ example: 'qwerty', description: 'The password of the user' })
  @IsString()
  password!: string;
}
