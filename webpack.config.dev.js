import webpack from 'webpack';
import path from 'path';
const fs = require('fs');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const babelConfig = JSON.parse(fs.readFileSync('.babelrc'));


export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: false, // set to false to see a list of every file being bundled.
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    outputPath: path.join(__dirname, '/dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([ { from: 'static/css', to: 'static/css' }, { from: 'static/img', to: 'static/img'}, {from: 'static/fonts', to: 'static/fonts'} ])
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'static'
    },
    loaders: [
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