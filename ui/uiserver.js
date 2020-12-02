const express = require('express');
require('dotenv').config();
// const proxy = require('http-proxy-middleware');
const path = require('path');

const port = process.env.UI_SERVER_PORT || 8000;
const app = express();

const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';

if (enableHMR && (process.env.NODE_ENV !== 'production')) {
  console.log('Adding dev middleware and enabling HMR');
  /* eslint "global-require" : 'off' */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config.js');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));

// const apiProxyTarget = process.env.API_PROXY_TARGET || 'http://localhost:4000/';
// if (apiProxyTarget) {
//   app.use('/', proxy({ target: apiProxyTarget }));
// }

const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || 'http://localhost:4000/';
const env = { UI_API_ENDPOINT };

app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`UI server started on port ${port}`);
});
