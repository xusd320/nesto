import defaultConf from './conf.default';
import { Zk } from 'dubbo2.js';

export default  {
  ...defaultConf,
  logger: {
    level: 'info',
    file: '-%DATE%.log',
    dir: './log',
  },
  cors: {
    origin: [
      'http://localhost:80',
    ],
  },
  dubbo: {
    options : {
      application: { name: 'nest-dubbo' },
      register: Zk({
        url: 'localhost:2181',
        zkAuthInfo: { scheme: 'digest', auth: 'user:passwd' },
        zkRoot: 'test',
      }),
    },
    matches: [
      {
        interfaces: [
          'com.test.dubbo.service',
        ],
        setting: {
          version: '1.0.0',
        },
      },
    ],
  },
};
