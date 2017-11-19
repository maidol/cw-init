#!/usr/bin/env node

'use strict';

const co = require('co');
const Command = require('../lib/init_cw_command');

co(function* () {
  yield new Command().run(process.cwd(), process.argv.slice(2));
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});
