import { Strategy } from 'passport-cookie';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super({
      cookieName: 'GUAZISSO',
      signed: false,
    }, async (token: string, done: (...args: any[]) => any) => {
      const result = await authService.validateToken(token);
      if (result.data.code === 0) {
        return done(null, result.data.userInfo);
      } else {
        done(new UnauthorizedException('未登录'));
      }
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
