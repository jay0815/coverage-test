const path = require('path');

module.exports = (env = {}, argv) => {

  const isProduction = !!env.production;

  const mode = isProduction ? 'production' : 'development';

  const devtool =  isProduction ? 'nosources-source-map' : 'source-map';

  const config = {
    mode: mode,
    devtool: devtool,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'coverage/lcov-report'),
      hot: true,
      port: 9100,
      historyApiFallback: true,
      open: true,
      compress: false,
    },
    module: {
      rules: [{
        test: /\.js?$/,
        use: {
          loader: 'babel-loader'
        }
      }]
    }
  };

  return config;
};