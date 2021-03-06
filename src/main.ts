import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as expressReqeustId from 'express-request-id';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(expressReqeustId());
  app.use(cookieParser());

  if (process.env.NESTO_ENV !== 'online') {
    const options = new DocumentBuilder()
      .setTitle('nesto')
      .setDescription('The nesto api description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }
  app.useGlobalPipes(new ValidationPipe({
    validationError: { target: false, value: false },
  }));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
