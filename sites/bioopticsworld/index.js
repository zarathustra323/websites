const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const onStart = require('@endeavorb2b/base-website-common/on-start');
const errorTemplate = require('@endeavorb2b/base-website-themes/default/templates/error');
const { version } = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  errorTemplate,
  onStart: onStart(version),
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
