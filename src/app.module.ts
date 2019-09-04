import { Module, NestModule, HttpModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';

import { AuthModule } from './module/auth/auth.module';
import { LoggerModule } from './module/logger.module';
import { ConfigurationModule } from './module/config.module';
import { DubboRpcModule } from './module/dubbo/dubbo.module';

import { LoggerMiddleware } from './middleware/logger.middleware';
import { CorsMiddleware } from './middleware/cors.middleware';

import { HelperService } from './module/util/helper.service';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CommonController } from './controller/common.controller';
import { CommonService } from './service/common.service';

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    LoggerModule,
    DubboRpcModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      xsrfCookieName: null,
      xsrfHeaderName: null,
    }),
  ],
  controllers: [ AppController, CommonController ],
  providers: [ HelperService, AppService, CommonService ],
})
export class AppModule implements NestModule {

  constructor(
    private readonly config: ConfigService,
  ) { }

  configure(consumer: MiddlewareConsumer) {
    CorsMiddleware.configure(this.config.get('conf.cors'));
    consumer
      .apply(LoggerMiddleware, CorsMiddleware)
      .forRoutes('*');
  }
}
