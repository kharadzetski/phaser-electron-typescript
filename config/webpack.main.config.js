const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const { mainPath, target, mode, isDev } = require('./env');

module.exports = {
  entry: {
    main: `${mainPath}/index.ts`
  },
  output: {
    path: target,
    filename: '[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
  },
  node: {
    __dirname: false
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && 'source-map',
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ['.ts', '.js'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.ts$/, use: ['awesome-typescript-loader'] }
    ]
  },
  target: 'electron-main',
  mode // 'production' or 'development' webpack mode
};
