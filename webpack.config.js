var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpack =  require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpack({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/index.js",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', "react", 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
      }
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  output: {
    path: __dirname + '/dist/',
    filename: "index.min.js"
  },
  plugins: debug ? [
    HtmlWebpackConfig,
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
