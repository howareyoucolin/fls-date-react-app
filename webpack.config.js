const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};