import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';

@Module({
  imports: [
    ConfigModule.resolveRootPath(__dirname).load(`../config/*.${process.env.MED_ENV}.{ts,js}`, {
      modifyConfigName: name => name.replace(`.${process.env.MED_ENV}`, ''),
    }),
 ],
})

export class ConfigurationModule {}
