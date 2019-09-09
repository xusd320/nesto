import appConf from './config/conf.default';

export const apps = [
  {
    name: appConf.appName,
    script: `${__dirname}/main.js`,
    exec_mode: 'cluster',
    instances: 4,
    max_memory_restart: '1536M',
    error_file: '/dev/null',
    out_file: '/dev/null',
    env: {
      NESTO_ENV: process.env.MED_ENV,
    },
    // merge_logs: true,
  },
];
