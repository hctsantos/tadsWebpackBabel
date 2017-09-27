const path = require('path');

module.exports = {
  entry: './build-babel/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { 
        modules: [
            path.resolve(__dirname, "build-babel"),
            'node_modules'
        ],
        extensions: ['.js']
    }
};