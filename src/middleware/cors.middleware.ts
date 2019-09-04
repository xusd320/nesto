import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;

    public use(req: Request, res: Response, next: () => void) {
        if (CorsMiddleware.options) {
            cors(CorsMiddleware.options)(req, res, next);
        } else {
            cors()(req, res, next);
        }
    }
}
