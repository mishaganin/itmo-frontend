import { Module } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { UsersModule } from '@server/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@shared/consts';
import { AuthorService } from '@server/author/author.service';
import { ReaderService } from '@server/reader/reader.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthorService, ReaderService],
})
export class AuthModule {}
