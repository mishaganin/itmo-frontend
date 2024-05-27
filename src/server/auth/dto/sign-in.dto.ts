import { IsBoolean, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ example: '123@gmail.ru', description: 'The email of the user' })
  @IsString()
  email!: string;

  @ApiProperty({ example: 'qwerty', description: 'The password of the user' })
  @IsString()
  @Length(4, 100)
  password!: string;
}
