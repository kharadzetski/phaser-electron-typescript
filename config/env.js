const path = require('path');

const root = path.resolve('./');
const srcDir = `${root}/app/src/ts`;
const mainPath = `${srcDir}/main`;
const rendererPath = `${srcDir}/renderer`;
const target = `${root}/target`;
const template = `${root}/app/public/index.html`
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

module.exports = {
  mainPath,
  rendererPath,
  template,
  target,
  mode,
  isDev
};
