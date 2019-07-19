const path = require('path');

module.exports = {
  entry: './lib/index.js',
  mode: 'production',
  output: {
    filename: 'knex.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
