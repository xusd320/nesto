import { Inject, Controller, Get, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Logger } from 'winston';
import { java, Dubbo } from 'dubbo2.js';
import dubboService from '../module/dubbo/dubbo.service';
import { CommonService } from '../service/common.service';

@Controller()
export class CommonController {
  constructor(
    private readonly commonService: CommonService,
    @Inject('winston') private readonly logger: Logger,
    @Inject('dubbo') private readonly dubbo: Dubbo<typeof dubboService>,
  ) {}

  private onoff = true;

  @Get('healthCheck')
  healthCheck(@Res() res: Response) {
    if (this.onoff) {
      res.send('ok');
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('down');
    }
  }

  @Get('healthCheck/disable')
  healthCheckDisable(@Req() req: Request, @Res() res: Response) {
    if (req.ip === '127.0.0.1') {
      this.onoff = false;
      res.status(200).send('success');
    }
  }

  @Get('healthCheck/enable')
  healthCheckEnable(@Req() req: Request, @Res() res: Response) {
    if (req.ip === '127.0.0.1') {
      this.onoff = true;
      res.send('success');
    }
  }

  @Get('common/uuid')
  async getUUID(): Promise<object> {
    return this.commonService.getUUID();
  }

  @UseGuards(AuthGuard('cookie'))
  @Get('testDubbo')
  async getCarCount(@Req() req: Request) {
    const result = await this.dubbo.service.DimensionInfoV2Service.count(java.Integer(2), java.String('[]'));
    return result.res;
  }
}
