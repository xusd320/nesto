import appConf from './config/conf.default';

export const apps = [
  {
    name: appConf.appName,
    script: './main.js',
    instances: 4,
    exec_mode: 'cluster',
    error_file: `/med/log/apps/${appConf.appName.replace('/', '_')}-err.log`,
    out_file: `/med/log/apps/${appConf.appName.replace('/', '_')}-out.log`,
    merge_logs: true,
  },
];
