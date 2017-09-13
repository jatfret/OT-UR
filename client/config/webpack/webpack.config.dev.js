const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processDir = process.cwd();

module.exports = {
  entry: {
    home: './client/pages/home/home.js',
    edit: './client/pages/edit/edit.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: 'dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: path.resolve(processDir, 'client/pages/home/home.art'),
      chunks: ['commons', 'home'],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'edit.html',
      template: path.resolve(processDir, 'client/pages/edit/edit.art'),
      chunks: ['commons','edit'],
      hash: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons' // 指定公共 bundle 的名称。
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), 'client'),
        exclude: ['node_modules'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.art$/,
        loader: "art-template-loader",
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), "dist"),
    compress: true,
    hot: true,
    port: 8001
  },
};
