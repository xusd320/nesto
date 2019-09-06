import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { ConfigService } from 'nestjs-config';
// import * as DailyRotateFile from 'winston-daily-rotate-file';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(
            i => `${i.timestamp} ${i.level.toUpperCase()} ${config.get('conf.appName')}  - - ${i.message}`,
          ),
        ),
        // transports: [
        //   ...(
        //     config.has('conf.logger.file') ? [
        //       new DailyRotateFile({
        //        level: config.get('conf.logger.level'),
        //        filename: `${config.get('conf.appName').replace(/\//, '_')}${config.get('conf.logger.file')}`,
        //        dirname: config.get('conf.logger.dir'),
        //        datePattern: 'YYYY-MM-DD',
        //        handleExceptions: true,
        //       } as any),
        //     ] : []
        //   ),
        // ],
        exitOnError: false, // do not exit on handled exceptions
      }),
      inject: [ConfigService],
    }),
  ],
})
export class LoggerModule {}
