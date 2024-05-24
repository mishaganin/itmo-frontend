import { Module } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';
import { UsersModule } from '@server/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@shared/consts';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '@server/users/users.service';

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
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
