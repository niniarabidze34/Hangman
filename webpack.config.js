const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
};