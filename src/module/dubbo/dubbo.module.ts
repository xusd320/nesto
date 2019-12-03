import { Module } from '@nestjs/common';
import { setting } from 'dubbo2.js';
import { DubboModule } from 'nest-dubbo';
import { ConfigService } from 'nestjs-config';
// import service from './dubbo.service';

@Module({
  imports: [
    DubboModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        const dubboOptions = config.get('conf.dubbo.options');
        const dubboMatches = config.get('conf.dubbo.matches');
        const dubboSetting = setting;
        for (const matchRule of dubboMatches) {
          dubboSetting.match(matchRule.interfaces, matchRule.setting);
        }

        return { ...dubboOptions, ...{ dubboSetting }, service };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DubboRpcModule {}
