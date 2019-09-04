import { Injectable, Param } from '@nestjs/common';
import * as crypto from 'crypto';

interface Param {
  [propName: string]: string|number|boolean;
}

interface SignedParam extends Param {
  appkey: string;
  signature: string;
}

@Injectable()
export class HelperService {
  private encodeParam(params: Param): string {
    const keys = Object.keys(params).sort();
    const str = keys.reduce((s, k) => `${s}${k}=${encodeURIComponent(params[k].toString())}&`, '').slice(0, -1);
    return str;
  }

  public sign(params: Param, appkey: string, appSecret: string): SignedParam {
    const nonce = 1567522297390;
    const expires = nonce + 30 * 60 * 1000;
    const paramsEx = { ...params, appkey, expires, nonce };

    const encodeStr = this.encodeParam(paramsEx);
    const base64 = crypto.createHmac('sha256', appSecret).update(encodeStr).digest('base64');
    const md5 = crypto.createHash('md5').update(base64).digest('hex');
    const signature = md5.slice(5, 15);
    const result  = { ...paramsEx, signature } ;
    return result;
  }
}
