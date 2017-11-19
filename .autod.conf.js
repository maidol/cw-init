'use strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
  ],
  dep: [
    'cw-init-config',
  ],
  devdep: [
    'autod',
    'egg-bin'
  ],
  registry: 'https://r.cnpmjs.org',
};
