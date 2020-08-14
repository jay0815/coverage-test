const path = require('path');

module.exports = (env = {}, argv) => {

  const config = {
    mode: 'development',
    devtool: 'source-map',
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