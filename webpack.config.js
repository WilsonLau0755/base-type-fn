const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".html"]
  },
  module: {
    rules: [
        // '.ts' or '.tsx' 后缀的文件将被 loadr 'awesome-typescript-loader' 处理。
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // 所有输出的 '.js' 有 sourcemaps 的文件将被 'source-map-loader' 预处理。
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}