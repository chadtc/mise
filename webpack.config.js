const path = require('path');
const restSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve (__dirname, 'dist'),
    filename: 'mise.js',
    library: 'mise',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [restSpread],
          }
        }
      }
    ]
  }
};
