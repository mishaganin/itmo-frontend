import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { UsersService } from '@server/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthorService } from '@server/author/author.service';
import { ReaderService } from '@server/reader/reader.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private authorService: AuthorService,
    private readerService: ReaderService,
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

  async login(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return this.jwtService.signAsync(payload);
  }

  register(signUpDto: CreateAccountDto) {
    const { isAuthor } = signUpDto;
    if (isAuthor) {
      return this.authorService.create(signUpDto);
    }

    return this.readerService.create(signUpDto);
  }
}
