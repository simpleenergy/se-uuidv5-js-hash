const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./dist/index.js",
    library: "uuidV5",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: true,
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ]
}
