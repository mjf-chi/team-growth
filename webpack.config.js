const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, './src/server.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'), 
    filename: 'main.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      }
    }),
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: "empty",
    net: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0"]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      },
    ]
  },
  progress: true,
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  }
};
