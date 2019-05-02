const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/single-spa-playground.js'),
  output: {
    filename: 'single-spa-playground.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    libraryTarget: 'system',
  },
  devtool: 'sourcemap',
  devServer: {
    historyApiFallback: true,
    index: 'test/index.html',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [
    'single-spa',
  ]
}