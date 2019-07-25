var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: [
    './src'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev')],
        use: [
          'source-map-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev')],
        use: [
          'babel-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev')],
        use: [
          'tslint-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev')],
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          useBabel: true,
          babelOptions: {
            babelrc: false, /* Important line */
            presets: [
              [
                '@babel/preset-env',
                {
                  'targets': {
                    'browsers': ['> 5%', 'last 2 versions']
                  },
                  'modules': false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[name].[hash:7].[ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      inject: 'true',
      favicon: null
    }),
    new webpack.ProvidePlugin({
      NIM: path.resolve(__dirname, './src/libs/nim_web/NIM_Web_NIM_v6.6.0')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.min.js', '.css']
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    hot: true,
    compress: true,
    port: 9000
  },
  devtool: 'source-map'
}
