import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  constructor(
    @Inject('winston') private readonly logger: Logger,
  ) {}

  use(req: Request, res: Response, next: () => void) {
    res.on('finish', () => this.logger.info(`${req.id} ${req.method} ${req.path} ${res.statusCode} ${JSON.stringify(req.query || req.body)} `));
    next();
  }
}
