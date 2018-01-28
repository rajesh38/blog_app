var path = require('path');
var webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const js_output_template = "javascripts/[name].build.js";

module.exports = {
  context: __dirname + "/client",
  entry: {
    app: [
      './javascripts/app.js',
      './stylesheets/app.scss'
    ],
    login_page: [
      './features/LoginPage/index.js', './features/LoginPage/assets/index.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: js_output_template,
    publicPath: "http://localhost:8080/public"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // Below devServer configuration should be re visited
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true"
    },
    publicPath: "http://localhost:8080/public",
    contentBase: "./",
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether",
    })
  ]
};