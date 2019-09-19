const path = require('path');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        libraryTarget: "umd",
        library: "appshome-react",
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}