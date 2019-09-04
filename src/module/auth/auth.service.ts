import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { stringify as qs } from 'querystring';
import { HelperService} from '../util/helper.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly helper: HelperService,
    private readonly http: HttpService,
  ) {}

  public async validateToken(token: string): Promise<any> {
    const { url, appkey, appSecrect } = this.config.get('rest.ssoIdentity');
    const params = this.helper.sign({ token }, appkey, appSecrect);
    const result  = await this.http.post(url, qs(params)).toPromise();
    return result;
  }
}
