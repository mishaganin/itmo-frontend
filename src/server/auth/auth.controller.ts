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
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Response } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInDto } from '@server/auth/dto/sign-in.dto';
import { AuthGuard } from '@server/guards/auth.guard';
import { Roles } from '@server/decorators/roles.decorator';
import { Role } from '@shared/enums/role.enum';

@ApiTags('auth')
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

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiBody({ type: SignInDto })
  // @UseGuards(AuthGuard)
  @Roles(Role.Reader)
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async login(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res: Response) {
    const accessToken = await this.authService.login(signInDto.email, signInDto.password);
    res.cookie('access_token', accessToken, { httpOnly: true, secure: true });
    return res.send({ message: 'Login successful' });
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  async register(@Body() signUpDto: CreateAccountDto) {
    return this.authService.register(signUpDto);
  }
}
