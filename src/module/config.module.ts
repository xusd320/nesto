import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';

@Module({
  imports: [
    ConfigModule.resolveRootPath(__dirname).load(`config/*.${process.env.NESTO_ENV}.{ts,js}`, {
      modifyConfigName: name => name.replace(`.${process.env.NESTO_ENV}`, ''),
    }),
 ],
})

export class ConfigurationModule {}
