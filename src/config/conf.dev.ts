import defaultConf from './conf.default';

export default  {
  ...defaultConf,
  logger: {
    level: 'info',
    file: '-%DATE%.log',
    dir: '/med/log/apps/',
  },
  cors: {
    origin: [
      'http://xinche-pms.guazi-cloud.com',
    ],
  },
  dubbo: {
    options : {
      application: { name: 'nest-dubbo' },
      register: 'g1-test-zook-v01.dns.guazi.com:2181',
      zkAuthInfo: { scheme: 'digest', auth: 'xinchezk:nhLuJ0RlGUU' },
      zkRoot: 'xinche',
    },
    matches: [
      {
        interfaces: [
          'com.maodou.data.dimension.service.v2.DimensionInfoV2Service',
        ],
        setting: {
          version: '1.0.0',
        },
      },
    ],
  },
};
