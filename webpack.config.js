var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/widget/index',
  output: {
    path: __dirname + '/dist',
    filename: 'widget.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: __dirname + '/src'
    }]
  },
  devServer: {
    contentBase: './src'
  }
};