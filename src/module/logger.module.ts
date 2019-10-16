import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { ConfigService } from 'nestjs-config';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as moment from 'moment';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(
            i =>
            `${
              moment(i.timestamp).format('YYYY-MM-DDTHH:mm:ss.SSSZZ')
            } ${
              i.level.toUpperCase()} ${config.get('conf.appName')
            } - ${
              i.message.match(/^(\S+\s){2}(\S+)/)[2]
            } ${
              i.message
            }`,
          ),
        ),
        transports: [
          ...(config.has('conf.logger.file') && config.has('conf.logger.dir')
            ? [
                new DailyRotateFile({
                  level: config.get('conf.logger.level'),
                  filename: `${config
                    .get('conf.appName')
                    .replace(/\//, '_')}${config.get('conf.logger.file')}`,
                  dirname: config.get('conf.logger.dir'),
                  datePattern: 'YYYY-MM-DD',
                  handleExceptions: true,
                } as any),
              ]
            : []),
          new winston.transports.Console({
            level: config.get('conf.logger.level'),
            handleExceptions: true,
            json: true,
            colorize: true,
          } as any),
        ],
        exitOnError: false, // do not exit on handled exceptions
      }),
      inject: [ConfigService],
    }),
  ],
})
export class LoggerModule {}
