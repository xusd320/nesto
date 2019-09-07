import appConf from './config/conf.default';

export const apps = [
  {
    name: appConf.appName,
    script: './main.js',
    exec_mode: 'cluster',
    instances: 4,
    max_memory_restart: '50M',
    error_file: '/dev/null',
    out_file: '/dev/null',
    // merge_logs: true,
  },
];
