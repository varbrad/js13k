const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JS13K',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}
