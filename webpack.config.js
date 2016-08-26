var webpack = require('webpack');


var __PROD__ = process.env.NODE_ENV === 'production';
var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];
if (__PROD__) {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = {
  devtool: __PROD__ ? null : 'cheap-module-source-map',
  entry: './src/widget/widget',
  output: {
    path: __dirname + '/dist',
    filename: 'widget.js',
    publicPath: '/'
  },
  plugins: plugins,
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