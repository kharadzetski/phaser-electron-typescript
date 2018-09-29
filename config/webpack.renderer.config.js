const HtmlPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

const { rendererPath, template, target, mode, isDev } = require('./env');

module.exports = {
  entry: {
    renderer: `${rendererPath}/index.ts`
  },
  output: {
    path: target,
    filename: '[name].js',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'source-map',
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ['.ts', '.js'], plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Phaser + Electron',
      filename: 'index.html',
      template
    })
  ],
  module: {
    rules: [
      // Url loader
      { test: /\.(png|woff|woff2|eot|ttf|svg|fnt)$/, loader: 'url-loader', options: { limit: 2048, fallback: 'file-loader' } },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.ts$/, use: ['awesome-typescript-loader'] }
    ]
  },
  target: 'electron-renderer',
  mode // 'production' or 'development' webpack mode
};
