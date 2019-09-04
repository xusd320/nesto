import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getUUID(): object {
    return { code: 0, data: { uuid: 'affdadfaf23rsdfsadf' }, message: '请求成功' };
  }
}
