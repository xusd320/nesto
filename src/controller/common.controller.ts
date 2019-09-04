import { Controller, Get } from '@nestjs/common';
import { CommonService } from '../service/common.service';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('uuid')
  async getUUID(): Promise<object> {
    return this.commonService.getUUID();
  }
}
