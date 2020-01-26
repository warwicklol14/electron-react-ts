const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: './src/react.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: { 
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        include: /src/,
        use: [{loader: 'file-loader'}]
      },
    ],  
  },
  output: {
    path: __dirname + '/../dist',
    filename: 'react.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
  ]
};