const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JS13K',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackIncludeAssetsPlugin({ assets: ['src/style.scss'], append: true })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}
