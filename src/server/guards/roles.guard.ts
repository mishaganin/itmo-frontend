import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@shared/enums/role.enum';
import { ROLES_KEY } from '@server/decorators/roles.decorator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const token = context.switchToHttp().getRequest().headers.authorization;
    if (!token) {
      throw new UnauthorizedException('User not found');
    }
    const user = this.jwtService.decode(token.split(' ')[1]);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
