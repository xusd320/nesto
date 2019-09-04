import { Module, HttpModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CookieStrategy } from './cookie.strategy';
import { HelperService} from '../util/helper.service';

@Module({
  imports: [
    PassportModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      xsrfCookieName: null,
      xsrfHeaderName: null,
    }),
  ],
  providers: [AuthService, CookieStrategy, HelperService],
  exports: [AuthService],
})
export class AuthModule {}
