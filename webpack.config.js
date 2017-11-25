const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const babelConfig = JSON.parse(fs.readFileSync('.babelrc'));
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  debug: false,
  devtool: 'eval',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'production'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([ { from: 'static/css', to: 'static/css' }, { from: 'static/js', to: 'static/js' }, { from: 'static/img', to: 'static/img'}, {from: 'static/fonts', to: 'static/fonts'} ]),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'static'
    },
    loaders: [
      { test: /\.js?$/, exclude: /node_modules|vendor\.js/, loader: 'babel', query: babelConfig },
      { test: /\.jsx?$/, exclude: /node_modules|vendor\.js/, loader: 'babel', query: babelConfig },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test: /\.woff(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=dist/fonts/[path][name].[ext]' },
      { test: /\.woff2(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=dist/fonts/[path][name].[ext]' },
      { test: /\.ttf(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=dist/fonts/[path][name].[ext]' },
      { test: /\.otf(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=dist/fonts/[path][name].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'url-loader?name=dist/fonts/[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=dist/svg/[path][name].[ext]' },
      { test: /.*\.(gif|png|jpe?g)$/, loader: 'url-loader?limit=10000&name=dist/img/[path][name].[ext]' }
    ]
  }
};
