const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
  devtool:
    process.env.NODE_ENV === 'dev' ? 'cheap-module-source-map' : 'source-map',
  entry: resolve('index.tsx'),
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name].build.js',
  },
  resolve: {
    extensions: ['.tsx', 'ts', '.js', '.json'],
    alias: {
      '@src': resolve('./src'),
    },
  },
  devServer:
    process.env.NODE_ENV === 'dev'
      ? {
          host: 'localhost',
          port: '8080',
          proxy: {
            '/getAllData': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              pathRewrite: {
                '^/getAllData': '/getAllData',
              },
            },
          },
          inline: true,
          compress: true,
          historyApiFallback: true,
          hot: true,
        }
      : {},
  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'react+typescript',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      },
      filename: 'index.html',
      template: resolve('index.html'),
    }),
  ],
}
