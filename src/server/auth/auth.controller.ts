import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.authService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.authService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async login(@Body() signInDto: Record<string, any>, @Res({ passthrough: true }) res: Response) {
    const accessToken = await this.authService.login(signInDto.username, signInDto.password);
    res.cookie('access_token', accessToken, { httpOnly: true, secure: true }); // Adjust options as needed
    return res.send({ message: 'Login successful' });
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  async register(@Body() signUpDto: CreateAccountDto) {
    return this.authService.register(signUpDto);
  }
}
