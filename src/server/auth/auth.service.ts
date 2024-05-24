import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { UsersService } from '@server/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    return this.prisma.account.create({
      data: {
        username: createAccountDto.username,
        email: createAccountDto.email,
        password: createAccountDto.password,
      },
    });
  }

  findAll() {
    return 'This action returns all auth';
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAccountDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
