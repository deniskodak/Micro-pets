const { merge } = require('webpack-merge');
const loadSharedConfig = require('./shared.config');

const loadModeConfig = mode => require(`./webpack.${mode}.config`);

module.exports = (env, arg) =>
  merge(loadSharedConfig(arg.mode), loadModeConfig(arg.mode));